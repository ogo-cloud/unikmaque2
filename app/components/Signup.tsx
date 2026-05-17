import { Input } from "~/components/ui/input";
import { Form, Link, useNavigate, useNavigation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  type ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import {
  faCircleExclamation,
  faCircleUser,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import bg_shopping from "~/img/bg-shopping.jpg";
import { Separator } from "~/components/ui/separator";

import { promise, z } from "zod";
import _ from "lodash";
import parsePhoneNumber, { type PhoneNumber } from "libphonenumber-js";
import useCountries from "~/hooks/useCountries";
import { Info } from "lucide-react";

import { Others } from "~/db/schema";
import {
  type ConfirmationResult,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth} from "~/auth/firebaseDB";
import useAlert from "~/hooks/useAlert";
import { signInWithPhoneNumber } from "firebase/auth";
import { Users } from "~/db/schema";
import { Drizzle } from "~/db/clientDB";
import {genSalt, hash} from "bcryptjs"
import OTPForm from "~/components/OTPForm";
import CountryDropdown from "~/components/CountryDropdown";

const FormInput = z
  .object({
    full_name: z.string().trim().nonempty({ message: "Full name required" }),
    email: z.string().trim().email({ message: "Provide a valid email" }),
    phone: z
      .string()
      .trim()
      .nonempty({ message: "Enter a valid phone number" }),
    password: z.string().trim().nonempty({ message: "Password required" }),
    re_password: z.string().trim().nonempty({ message: "Re enter password" }),
  })
  .required();

export default function Signup() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const openAlert = useAlert();
  const [otp, setOtp] = useState<
      {code: string,
        authenticate?: ConfirmationResult;
      }>({code: ""});
  const [openOTP, setOpenOTP] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [err, setErr] = useState({
    full_name: { msg: "", err: false },
    email: { msg: "", err: false },
    phone: { msg: "", err: false },
    password: { msg: "", err: false },
    re_password: { msg: "", err: false },
  });
  const [ctr, setCtr] = useState<{
    phone: string | PhoneNumber;
    country: string;
    code: string;
    short: string;
  }>({ phone: "", country: "Nigeria", code: "+234", short: "NG" });
  const [data, setData] = useState<z.infer<typeof FormInput>>({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    re_password: "",
  });
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const countries = useCountries();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const loading = navigation.state === "loading";

  function inputChange(this: HTMLInputElement) {
    const val = parseInt(this.value);
    startTransition(() => {
      setErr((prevState) => ({
        ...prevState,
        phone: { msg: "", err: false },
        email: { msg: "", err: false },
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
            setData((prevState)=>({...prevState,email: "", phone: parsePhoneNumber(this.value, ctr.short as any)?.number ?? ""}));

      });
    }
  }

  const changeData = (ev: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setErr((prevState) => ({
        ...prevState,
        full_name: {
          err: false,
          msg: "",
        },
        password: {
          err: false,
          msg: "",
        },
        re_password: {
          err: false,
          msg: "",
        },
      }));
    });
    setData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const register = useCallback(
    async () => {
      try {
        const { error, success } = FormInput.safeParse({
          full_name: data.full_name,
          email: data.email,
          phone: ctr.phone,
          password: data.password,
          re_password: data.re_password,
        });

        if (_.isEqual(data.password, data.re_password)){
          if (!success) {
            const errType = error?.flatten().fieldErrors;
            console.log(errType);
            const err_full_name = !_.isUndefined(errType.full_name);
            const err_email = !_.isUndefined(errType.email);
            const err_phone = !_.isUndefined(errType.phone);
            const err_password = !_.isUndefined(errType.password);
            const err_re_password = !_.isUndefined(errType.re_password);

            if (!err_full_name && !err_password && !err_re_password) {
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
                const id = (await authSubmit()) as string;
                await submitIntoDatabase(id);
                openAlert("Registration Successful!");
                navigate("/account/login");
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

              }
            } else {
              setErr((prevState) => ({
                ...prevState,
                full_name: {
                  err: err_full_name,
                  msg: !_.isUndefined(errType.full_name)
                      ? errType.full_name[0]
                      : "",
                },
                password: {
                  err: err_password,
                  msg: !_.isUndefined(errType.password)
                      ? errType.password[0]
                      : "",
                },
                re_password: {
                  err: err_re_password,
                  msg: !_.isUndefined(errType.re_password)
                      ? errType.re_password[0]
                      : "",
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

        }else {
          openAlert("Password doesn't match", 'error');
          setErr(prevState => ({...prevState,password: {err: true, msg: "check password"},re_password: {err: true, msg: "check password"}}));
        }
      } catch (err: any) {
        const errMsg = err.code;
        if (errMsg) {
          openAlert(errMsg, "error");
        }else {openAlert("Invalid credentials", "error");

        }

      }
    },
    [data.email, data.password, data.full_name, data.re_password, ctr.phone, openAlert, navigate],
  );

  async function authSubmit(): Promise<string|undefined> {
    if (isPhoneNumber) {
      const appVerifier = new RecaptchaVerifier(auth, 'recaptcha',{size: "invisible"});
      const phoneVerify = await signInWithPhoneNumber(
          auth,
          ctr.phone as string,
          appVerifier,
      );

      setOpenOTP(true);
      setOtp((prevState) => ({
        ...prevState,
        authenticate: phoneVerify
      }));



      return undefined;
    } else {
      const {
        user: { uid },
      } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      return uid;
    }
  }
  async function submitIntoDatabase(id: string) {
    const salt = await genSalt(10);
    const hashed_password = await hash(data.password, salt)
    const user = Drizzle.insert(Users).values({
      uid: id,
      full_name: data.full_name,
      email: _.isEmpty(data.email) ? null : data.email,
      phone: _.isEmpty(data.phone) ? null : data.phone,
      country: ctr.country,
      password: hashed_password,
    });

    const others = Drizzle.insert(Others).values({
      userid: id,
    });
    const res = await Promise.all([user, others]);
    //navigate("/account/login");
    console.log(res);
    return res;
  }

  const verifyOTP = async () => {
    try {
      if (otp.authenticate){
        const {
          user: { uid },
        } = await otp.authenticate.confirm(otp.code);
        await submitIntoDatabase(uid);
        openAlert("Registration Successful!");
        navigate("/account/login");
      }
    }catch (err: any) {
      const errMsg = err.code;
      if (errMsg) {
        openAlert(errMsg, "error");
      }else {openAlert("Invalid credentials", "error");
      }
    }
  }


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
            <Form className={"z-50"} onSubmit={(ev) => ev.preventDefault()}>
              <Link to={"/"}>
                <b>
                  Unik
                  <span className={"text-pink-500"}>Maque2</span>
                </b>
              </Link>

              <div>
                <label htmlFor={"email"} className={"sr-only"}>
                  Full name
                </label>
                <Input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder="First name and Last name, eg John Doe"
                    disabled={loading}
                    value={data.full_name}
                    onInput={changeData}
                    className={
                      err.full_name.err
                          ? " ring-red-500/50! bg-red-500/10! border-red-500! pr-5"
                          : ""
                    }
                    autoFocus={err.full_name.err}
                />
                {err.full_name.err && (
                    <>
                      <div
                          className={"text-[13px] text-red-500! p-1 font-medium"}
                          aria-label={"InputError"}
                      >
                        {err.full_name.msg}
                      </div>
                      <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className={
                              "" +
                              "pointer-events-none select-none absolute top-2.5 text-red-500 right-3"
                          }
                          aria-labelledby={"inputError"}
                      />
                    </>
                )}
              </div>

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

                {open && <CountryDropdown  {...{ctr, setOpen, setCtr}}/>}


                <input
                    id="email_phone"
                    name="email_phone"
                    type="text"
                    ref={emailRef}
                    placeholder="Email or Phone number"
                    onChange={changeData}
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
                    onChange={changeData}
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
                            "pointer-events-none select-none absolute top-2.5 text-red-500 right-3"
                          }
                          aria-labelled={"inputError"}
                      />
                    </>
                )}
                {
                  !_.isEmpty(data.password) && (
                        <div
                            className={
                              "flex items-center justify-center text-sm sm:text-sm gap-3 bg-orange-400/50 rounded-4xl mt-2 px-3 py-1"
                            }
                        >
                          <Info absoluteStrokeWidth size={20} className={"text-orange-700"}/>
                          <p>Please enter at least 6 characters</p>
                        </div>)
                }
              </div>


              <label htmlFor={"re_password"} className={"sr-only"}>
                Re-type Password
              </label>
              <Input
                  id="re_password"
                  name="re_password"
                  type={show ? "text" : "password"}
                  placeholder=" Re-type password"
                  disabled={loading}
                  value={data.re_password}
                  onChange={changeData}
                  className={
                    err.re_password.err
                        ? " ring-red-500/50! bg-red-500/10! border-red-500! pr-5!"
                        : ""
                  }
                  autoFocus={err.re_password.err}
              />
              {err.re_password.err && (
                  <>
                    <div className={"text-[13px] text-red-500 p-1 font-medium"}>
                      {err.re_password.msg}
                    </div>

                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className={
                          "pointer-events-none select-none absolute top-2.5 text-red-600 right-3"
                        }
                        aria-labelled={"inputError"}
                    />
                  </>
              )}

              {!_.isEmpty(data.password)&&!_.isEmpty(data.re_password)&& (
                  <label
                      htmlFor={"show"}
                      className={"flex justify-center items-center gap-2 w-full"}
                      role={"button"}
                  >
                    <input
                        type={"checkbox"}
                        name={"show"}
                        id={"show"}
                        className={"size-4! ring-pink-500  "}
                        onClick={() => setShow(!show)}
                    />
                    <span className={"font-medium text-sm"}>Show password</span>
                  </label>
              )}

              <button disabled={loading || isPending} onClick={register}>
                {loading || (isPending && <FontAwesomeIcon icon={faSpinner} spin/>)}
                Sign up
              </button>
              <div className={"text-center flex items-center"}>
                <Separator className={"border border-gray-400 w-auto! grow"}/>
                <p className={"px-5"}>OR</p>
                <Separator className={"border! border-gray-400! w-auto! grow"}/>
              </div>
              <Link to={"/account/login"} className={"btn-ac"}>
                <FontAwesomeIcon icon={faCircleUser} size={"sm"}/> Log into your
                account
              </Link>

              <div>
                <p>
                  By creating an account,you agree to unikmaque2's
                  <Link to={"#"}>Condition of use</Link> and {""}
                  <Link to={"#"}>Privacy Notice</Link>
                </p>
              </div>
            </Form>
            ) : (
                <OTPForm verifyFunc={verifyOTP}
                         {...({otp, setOtp, loading})}
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
