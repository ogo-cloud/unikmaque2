import { Input } from "~/components/ui/input";
import { Form, Link, useNavigate, useNavigation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEye,
  faEyeSlash, faSpinner,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import bg_shopping from "~/img/bg-shopping.jpg";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import parsePhoneNumber, { type PhoneNumber } from "libphonenumber-js";
import _ from "lodash";
import { z } from "zod";
import  {eq} from "drizzle-orm";
import useAlert from "~/hooks/useAlert";
import {
  type ConfirmationResult, RecaptchaVerifier,
  signInWithEmailAndPassword, signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "~/auth/firebaseDB";
import useCountries from "~/hooks/useCountries";
import OTPForm from "~/components/OTPForm";
import CountryDropdown from "~/components/CountryDropdown";
import {Drizzle} from "~/db/clientDB";
import {equalTo} from "@firebase/database";
import {Users} from "~/db/schema";
import {compare} from "bcryptjs";

const FormInput = z
  .object({
    email: z.string().trim().email({ message: "Provide a valid email" }),
    phone: z
      .string()
      .trim()
      .nonempty({ message: "Enter a valid phone number" }),
    password: z.string().trim().nonempty({ message: "Password required" }),
  })
  .required();

export default function Login() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const openAlert = useAlert();
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<z.infer<typeof FormInput>>({
    email: "",
    password: "",
    phone: "",
  });
  const [err, setErr] = useState({
    email: { msg: "", err: false },
    phone: { msg: "", err: false },
    password: { msg: "", err: false },
  });
  const [ctr, setCtr] = useState<{
    phone: string | PhoneNumber;
    country: string;
    code: string;
    short: string;
  }>({ phone: "", country: "Nigeria", code: "+234", short: "NG" });
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState<{
    code: string;
    authenticate?: ConfirmationResult;
  }>({ code: "" });
  const [openOTP, setOpenOTP] = useState(false);
  const countries = useCountries();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(navigation.state === "loading");
  const [show, setShow] = useState(false);

  function inputChange(this: HTMLInputElement) {
    const val = parseInt(this.value);
    startTransition(() => {
      setErr((prevState) => ({
        ...prevState,
        phone: {msg: "", err: false},
        email: {msg: "", err: false},
      }));
    });
    if (isNaN(val)) {
      startTransition(() => {
        setIsPhoneNumber(false);
        setData((prevState) => ({
          ...prevState,
          email: this.value,
          phone: "",
        }));
      });
    } else {
      startTransition(() => {
        setIsPhoneNumber(true);
        setCtr((prevState) => ({
          ...prevState,
          phone: parsePhoneNumber(this.value, ctr.short as any)?.number ?? "",
        }));
        setData((prevState) => ({
          ...prevState,
          email: "",
          phone: parsePhoneNumber(this.value, ctr.short as any)?.number ?? "",
        }));
      });
    }
  }

  const Login = useCallback(async () => {
    try {
      const { error, success } = FormInput.safeParse({
        email: data.email,
        phone: ctr.phone,
        password: data.password,
      });

      if (!success) {
        const errType = error?.flatten().fieldErrors;
        console.log(errType);
        const err_email = !_.isUndefined(errType.email);
        const err_phone = !_.isUndefined(errType.phone);
        const err_password = !_.isUndefined(errType.password);

        if (!err_password) {
          if (!err_phone && err_email) {
            await authSubmit();
            setErr((prevState) => ({
              ...prevState,
              email: {
                err: err_email,
                msg: !_.isUndefined(errType.email) ? errType.email[0] : "",
              },
            }));
          }
          if (!err_email && err_phone) {
            await authSubmit();
            openAlert("Login Successful!");
            navigate("/account/profile");
            setErr((prevState) => ({
              ...prevState,
              phone: {
                err: err_phone,
                msg: !_.isUndefined(errType.phone) ? errType.phone[0] : "",
              },
            }));
          }
          if (err_phone && err_email) {
            setErr((prevState) => ({
              ...prevState,
              phone: {
                err: err_phone,
                msg: !_.isUndefined(errType.phone) ? errType.phone[0] : "",
              },
              email: {
                err: err_email,
                msg: !_.isUndefined(errType.email) ? errType.email[0] : "",
              },
            }));
            setLoading(false);
          }
        } else {
          setLoading(false);
          setErr((prevState) => ({
            ...prevState,
            password: {
              err: err_password,
              msg: !_.isUndefined(errType.password) ? errType.password[0] : "",
            },
            phone: {
              err: err_phone,
              msg: !_.isUndefined(errType.phone) ? errType.phone[0] : "",
            },
            email: {
              err: err_email,
              msg: !_.isUndefined(errType.email) ? errType.email[0] : "",
            },
          }));
        }
      }
    } catch (err: any) {
      setTimeout(()=> {setLoading(false);}, 1000);
      const errMsg = err.code;
      if (errMsg) {
        openAlert(errMsg, "error");
      } else {
        openAlert("Invalid credentials", "error");
      }
    }
  }, [data.email, data.password, ctr.phone, openAlert, navigate]);

  async function authSubmit() {
    if (isPhoneNumber) {
      const exist = await Drizzle.query.Users.findFirst({
        where: eq( Users.phone ,ctr.phone as string ),
      });

      if (exist) {
        const valid = await compare(data.password, exist.password);
        if (valid) {
          const appVerifier = new RecaptchaVerifier(auth, "recaptcha", {
            size: "invisible",
          });
          const phoneVerify = await signInWithPhoneNumber(
              auth,
              ctr.phone as string,
              appVerifier,
          );

          setOpenOTP(true);
          setOtp((prevState) => ({
            ...prevState,
            authenticate: phoneVerify,
          }));
          setLoading(false);
      }else {
        openAlert("Incorrect Password", "error");
      }
      }else {
      openAlert("You haven't registered with us", "error");
    }

    } else {
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(uid);
    }
  }

  const verifyOTP = async () => {
    setLoading(true);
    try {
      if (otp.authenticate) {
        const {
          user: {uid},
        } = await otp.authenticate.confirm(otp.code);
        openAlert("Login Successful!");
        navigate("/account/profile");
        console.log(uid);
      }
    } catch (err: any) {
      setTimeout(setLoading, 1000 ,false);
      const errMsg = err.code;
      if (errMsg)  openAlert(errMsg, "error");
       else  openAlert("Invalid credentials", "error");
    }
  };

  useEffect(() => {
    emailRef.current?.addEventListener("input", inputChange);

    return () => {
      emailRef.current?.removeEventListener("input", inputChange);
    };
  }, []);

  return (
    <main className={"form_container"}>
      <style>
        {`body{
           background-image: linear-gradient(to right, #E5E7EBA5, #E5E7EBA5), url(${bg_shopping});
        }`}
      </style>
      {!openOTP ? (
          <Form className={"z-[2]"} onSubmit={(ev) => ev.preventDefault()}>
            <Link to={"/"}>
              <b>
                Unik
                <span className={"text-pink-500"}>Maque2</span>
              </b>
            </Link>
            <div className={"relative"}>
              <label htmlFor={"email_phone"} className={"sr-only"}>
                Email/Phone number
              </label>

              {isPhoneNumber && (
                  <button
                      type={"button"}
                      className={
                        "text-pink-500 font-medium text-sm absolute top-2 left-3"
                      }
                      onClick={() => setOpen(!open)}
                      disabled={loading}
                  >
                    {ctr.short} {ctr.code}
                  </button>
              )}

              {open &&  <CountryDropdown  {...{ctr, setOpen, setCtr}} />}



              <input
                  id="email_phone"
                  name="email_phone"
                  type="text"
                  ref={emailRef}
                  placeholder="Email or Phone number"
                  autoFocus={(isPhoneNumber && err.phone.err) || err.email.err}
                  className={
                      "transition-all! duration-500" +
                      ((isPhoneNumber && err.phone.err) ||
                      (err.email.err && !isPhoneNumber)
                          ? " ring-red-500! bg-red-500/10 border-red-500! pr-3!"
                          : "")
                  }
                  style={{
                    paddingLeft: isPhoneNumber ? "5rem" : "0.75rem",
                  }}
                  disabled={loading}
                  autoComplete={"off"}
              />
              {isPhoneNumber
                  ? err.phone.err && (
                  <>
                    <div
                        className={
                          "text-[13px] text-red-500! p-1  border-red-500! font-medium"
                        }
                    >
                      {err.phone.msg}
                    </div>

                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className={
                          "pointer-events-none select-none absolute top-2.5 text-red-500 right-3"
                        }
                        aria-labelled={"inputError"}
                    />
                  </>
              )
                  : err.email.err && (
                  <>
                    <div
                        className={
                          "text-xs text-red-500! p-1  font-medium border-red-500!"
                        }
                    >
                      {err.email.msg}
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className={
                            "" +
                            "pointer-events-none select-none absolute top-2.5 text-red-500 right-3"
                        }
                        aria-labelled={"inputError"}
                    />
                  </>
              )}
            </div>
            <div>
              <label htmlFor={"password"} className={"sr-only"}>
                Password
              </label>
              <Input
                  id={"password"}
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder=" Password: at least 6 characters"
                  disabled={loading}
                  value={data.password}
                  onChange={(ev) =>{
                    setErr(prevState => ({...prevState, password: {msg: "", err: false}}));
                    setData((prevState) => ({
                      ...prevState,
                      password: ev.target.value,
                    }))
                  }

                  }
                  className={
                    err.password.err
                        ? " ring-red-500/50! bg-red-500/10! border-red-500! pr-5!"
                        : ""
                  }
                  autoFocus={err.password.err}
              />
              {err.password.err && (
                  <>
                    <div className={"text-[13px] text-red-500 p-1 font-medium"}>
                      {err.password.msg}
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className={
                          "pointer-events-none select-none absolute top-2.5 text-red-600 right-8"
                        }
                        aria-labelled={"inputError"}
                    />
                  </>
              )}
              {show ? (
                  <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={
                        " absolute top-2.5 right-3"
                      }
                      onClick={() => setShow(!show)}
                  />
              ) : (
                  <FontAwesomeIcon
                      icon={faEye}
                      className={
                        "absolute top-2.5 right-3"
                      }
                      onClick={() => setShow(!show)}
                  />
              )}
            </div>

            <button disabled={loading} onClick={Login}>
              {(loading || isPending) &&
                  (<FontAwesomeIcon icon={faSpinner} spin/>)}{""}
             Log in
            </button>

            <div className={"text-center text-xs"}>
              <Link to={"#"} className={"underline text-pink-600!"}>
                Forget password ?
              </Link>
              ,Try Recover your account
            </div>
            <Link to={"/account/signup"} className={"btn-ac"}>
              Create an account <FontAwesomeIcon icon={faUserPlus} size={"sm"}/>
            </Link>
          </Form>
      ) : (
          <OTPForm
              verifyFunc={verifyOTP}
              otp={otp}
              setOtp={setOtp}
              loading={loading}
          />
      )}
      <div id={"recaptcha"}></div>
      )
       {open && (
        <div
          className={"h-screen w-full fixed top-0 z-[1]"}
          onClick={() => setOpen(false)}
        ></div>
      )}

    </main>
  );
}
