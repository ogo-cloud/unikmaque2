import React, {type Dispatch, memo, type ReactElement, type SetStateAction} from "react";
import {Form} from "react-router";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "~/components/ui/input-otp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import type {ConfirmationResult} from "firebase/auth";

type Props = {
    verifyFunc: VoidFunction,
    setOtp: Dispatch<
        SetStateAction<{
            code: string,
            authenticate?: ConfirmationResult
        }>
    >;
    otp: {
        code: string,
        authenticate?: ConfirmationResult;
    },
    loading: boolean,

}

function OTPForm({
                     verifyFunc,
                     setOtp,
                      loading,
                      otp,

}: Props): ReactElement {
    return (
    <Form onSubmit={(ev) => ev.preventDefault()} className={"max-w-sm"}>
        <div className={"gap-3 flex flex-col justify-center items-center"}>
            <label htmlFor={"otp"} className={"text-xl flex flex-col w-full"}>
                <b>Enter OPT</b>
                <small className={"p-1 font-medium text-pink-600 text-[13px] "}>
                    Please enter the OTP sent to your phone.
                </small>
            </label>
            <InputOTP
                type={"number"}
                maxLength={6}
                value={otp.code}
                // disabled={loading}
                onChange={(val) => {
                    setOtp((prevState) => ({...prevState, code: val }));
                }}
                className={"ring-pink-700!"}>
                <InputOTPGroup>
                    <InputOTPSlot  className={"ring-pink-500!"}  index={0} />
                    <InputOTPSlot  className={"ring-pink-500!"} index={1}/>
                </InputOTPGroup>
                <InputOTPSeparator/>
                <InputOTPGroup>
                    <InputOTPSlot  className={"ring-pink-500!"} index={2}/>
                    <InputOTPSlot  className={"ring-pink-500!"} index={3}/>
                </InputOTPGroup>
                <InputOTPSeparator/>
                <InputOTPGroup>
                    <InputOTPSlot  className={"ring-pink-500!"}  index={4}/>
                    <InputOTPSlot  className={"ring-pink-500!"}  index={5}/>
                </InputOTPGroup>
            </InputOTP>
        </div>

        <button disabled={loading} onClick={verifyFunc}>
            {loading  && <FontAwesomeIcon icon={faSpinner} spin/>}{""}
            verify
        </button>
    </Form>
    );
}




 export default memo(OTPForm);