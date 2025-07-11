import {Input} from "~/components/ui/input";
import {Form, Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faThreads} from "@fortawesome/free-brands-svg-icons";
import React, {useEffect} from "react";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import bg_shopping from "~/img/bg-shopping.jpg";


export default function Login() {
    return(<main className={"form_container"}>
        <style>
            {`body{
           background-image: linear-gradient(to right, #E5E7EBA5, #E5E7EBA5), url(${bg_shopping});
        }`}
        </style>
        <Form>
            <Link to={"/"}>
                <b>
                    Unik
                    <span className={"text-pink-500"}>Maque2</span>
                </b>
            </Link>
            <div>
                <label htmlFor={"email_phone"} className={"sr-only"}>Email/Phone number</label>
                <Input id="email_phone"
                       name="email_phone"
                       type="text"
                       placeholder="Email or Phone number"/>
            </div>
            <div>
                <label htmlFor={"password"} className={"sr-only"}>Password</label>
                <Input id="password"
                       name="password"
                       type="password"
                       placeholder="***************"/>
            </div>
            <button>Log in</button>
            <div className={"text-center text-xs"}>
                <Link to={"#"} className={"underline text-pink-600!"}>Forget password ?</Link>,Try Recover your account
            </div>
            <Link to={"/account/signup"} className={"btn-ac"}>Create an account <FontAwesomeIcon icon={faUserPlus}
                                                                                                 size={"sm"}/></Link>

        </Form>

    </main>);
}