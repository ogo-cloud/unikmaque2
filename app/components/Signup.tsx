import {Input} from "~/components/ui/input";
import {Form, Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {type BaseSyntheticEvent, type ChangeEvent, Suspense, useEffect, useRef, useState} from "react";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import bg_shopping from "~/img/bg-shopping.jpg";
import {Separator} from "~/components/ui/separator";

import {z} from "zod";
import _ from "lodash";
import parsePhoneNumber, {type PhoneNumber} from "libphonenumber-js";
import useCountries from "~/hooks/useCountries";
import {Info} from "lucide-react";

const FormInput = z.object({
      full_name:z.string(),
        email:z.string().email(),
        phone:z.string(),
        password:z.string(),
        re_password:z.string(),

})

export default function Signup() {
   /*useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, #E5E7EBA5, #E5E7EBA5), url (${bg_shopping})`;
     }, [bg_shopping]);*/

    const [ctr ,setCtr] = useState<{phone:  string |PhoneNumber, country:string, code: string, short: string}>({phone: "", country: "Nigeria", code: "+234", short: "NG"});
    const [data, setData] = useState<z.infer<typeof FormInput>>({
        full_name: "",
        email: "",
        password: "",
        phone: "",
        re_password: "",
    });
    const emailRef = useRef<HTMLInputElement| null>(null);
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);
    const countries = useCountries();
    const  [open,setOpen] = useState(false);


    function inputChange(this: HTMLInputElement) {
        const val= parseInt(this.value);

        if (isNaN(val)&& _.isEmpty(val)){
            setIsPhoneNumber(false);
            console.log("email entered");
        }else { setIsPhoneNumber(true);
            console.log("number entered");
        }
    }

    useEffect(() => {
        emailRef.current?.addEventListener("input",inputChange);

        return () => {
            emailRef.current?.removeEventListener("input",inputChange);
        }
    }, []);


    return (<main className={"form_container"}>
        <style>
            {`body{
           background-image: linear-gradient(to right, #E5E7EBA5, #E5E7EBA5), url(${bg_shopping});
        }`}
        </style>

        <Form className={"z-50"}>
            <Link to={"/"}>
                <b>
                    Unik
                    <span className={"text-pink-500"}>Maque2</span>
                </b>
            </Link>

            <div>
                <label htmlFor={"email"} className={"sr-only"}>Full name</label>
                <Input id="full_name"
                       name="full_name"
                       type="text"
                       placeholder="First and last name, e.g. John Doe"/>
            </div>


            <div className={"relative w-full"}>
                <label htmlFor={"email_phone"} className={"sr-only"}>
                    Email/Phone number
                </label>

                {isPhoneNumber && (
                    <button type={"button"} className={"text-pink-500 font-medium text-sm absolute top-2 left-3"}
                            onClick={() => setOpen(!open)}>
                        {ctr.short} {ctr.code}
                    </button>
                )}

                {open && (
                    <div id={"dropdown"}
                         className={"absolute w-72 top-full rounded-lg bg-white overflow-y-auto max-h-96 p-5 "}
                    >
                        <h5 className={"bg-gray-200 py-1 px-3 mb-3 font-semibold"}>Select country</h5>
                        <div id={"countries"}>
                            {_.map(countries, (country, i) => (
                                <div
                                    role={"button"}
                                    key={i}
                                    className={"flex items-center justify-between px-1" + (country.name == ctr.country ? "bg-gray-200" : "")}
                                    onClick={() => {
                                        setCtr({
                                            phone: parsePhoneNumber(data.phone, country.phoneCode as any) ?? "",
                                            country: country.name,
                                            code: `+${country.phoneCode}`,
                                            short: country.iso2,

                                        });
                                        setOpen(false);
                                    }}

                                >
                                    <div className={"flex items-center gap-2"}>
                                        <img src={country.icon}
                                             alt={country.name}
                                             style={{
                                                 width: 16,
                                                 height: 12
                                             }}/> {country.name}
                                    </div>
                                    <span className={"text-gray-500 text-sm"}>+{country.phoneCode}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

              <input
                id="email_phone"
                name="email_phone"
                type="text"
                ref={emailRef}
                    placeholder="Email or Phone number"
                    className={"transition-all! duration-500"}
                style={{
                    paddingLeft: isPhoneNumber ? "5rem" : "0.7rem",
                }}
              />
            </div>
            <div>
                <label htmlFor={"password"} className={"sr-only"}>
                    Password
                </label>
                <Input id="password"
                       name="password"
                       type="password"
                       placeholder=" At least 6 characters"
                />
                <div className={"flex items-center justify-center text-sm gap-3 bg-orange-400/50 rounded-4xl mt-2 px-3 py-1"}>
                    <Info absoluteStrokeWidth size={20} className={"text-orange-700"}/>
                    <p>Please enter at least 6 characters</p>
                </div>
            </div>

            <div>
                <label htmlFor={"re_password"} className={"sr-only"}>
                    Re-type Password
                </label>
                <Input id="re_password"
                       name="password"
                       type="password"
                       placeholder=" Re-type password"
                />
            </div>


            <button>Sign up</button>
            <div className={"text-center flex items-center"}>
                <Separator className={"border border-gray-400 w-auto! grow"}/>
                <p className={"px-5"}>OR</p>
                <Separator className={"border! border-gray-400! w-auto! grow"}/>
            </div>
            <Link to={"/account/login"} className={"btn-ac"}>
                <FontAwesomeIcon icon={faCircleUser} size={"sm"}/> Log into your account</Link>


            <div>
                <p>
                    By creating an account,your agree to unikmaque2's <Link to={"#"}>Condition of u
                    Use</Link> and <Link to={"#"}>Privacy Notice</Link>terms and conditions.
                </p>
            </div>

        </Form>
        {open && <div className={"h-screen w-full fixed top-0 z-[1]"} onClick={() => setOpen(false)}></div>}


    </main>);

}