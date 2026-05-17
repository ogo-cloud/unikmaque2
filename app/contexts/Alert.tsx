import {createContext, type ReactNode, useEffect, useState} from "react";
import { Toaster} from "~/components/ui/sonner";
import { type ExternalToast, toast} from "sonner";
import {CheckCircle, CircleAlert, CircleX, TriangleAlert} from "lucide-react";
import {ReCaptchaV3Provider} from "firebase/app-check";
import {getAnalytics} from "firebase/analytics";
import {app, auth} from "~/auth/firebaseDB";
import {Drizzle} from "~/db/clientDB";

type AlertType = "success"| "danger"| "failed" |"pending" | "warning" | "error" | "approved";
type AlertFunc  =  (
                    msg: string,
                    variant?: AlertType,
                    params?: ExternalToast,
                    action?: VoidFunction,
                    ) => void;

export  const AlertContext = createContext<AlertFunc>(()=>{} );

  
export default function Alert({children}:{children:ReactNode}){
    const openAlert:AlertFunc = (msg , variant, params,action) => {
        const FuncAction = action ?? (()=>{})
        const ActionButton = {
            label: <CircleX className={"hover:scale-110"} />,
            onClick: FuncAction,
        };


      switch (variant) {
        case "danger":
        case "failed":
        case "error":
            toast(msg,{
                className: variant,
                icon: <CircleAlert className={"alert-icon"}/>,
                action: ActionButton,
                onDismiss: FuncAction,
                onAutoClose: FuncAction,
                ...params
            });
            break;
        case "pending":
        case "warning":
            toast(msg,{
                className: variant,
                icon: <TriangleAlert className={"alert-icon"}/>,
                action:ActionButton,
                onDismiss: FuncAction,
                onAutoClose: FuncAction,
                ...params
            });
            break;
            default:
                toast(msg,{
                    className: variant?? "success",
                    icon: <CheckCircle className={"alert-icon"}/>,
                    action: ActionButton,
                    onDismiss: FuncAction,
                    onAutoClose: FuncAction,
                    ...params
                });
}
    }

    useEffect(() => {
        const recaptcha = new ReCaptchaV3Provider("6LfD-4ErAAAAAGZrPknS-0N2Gj0pXPGPu_x_cvSe");
      const analytics= getAnalytics(app);
        //auth.settings.appVerificationDisabledForTesting= true;
        //Drizzle.run("CREATE TABLE USERS,")
    }, []);

  return(
      <AlertContext value={openAlert}>
          <Toaster className={"alert"}/>
          {children}
      </AlertContext>
  )
}