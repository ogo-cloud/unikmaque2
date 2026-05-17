import type { Route } from "./+types/signup";
import {lazy} from "react";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "UnikMaque | Signup"  },
        { name: "description", content: "Create an account and start placing your order " },
    ];
}
const Signup = lazy(() => import("~/components/Signup"));
export default function SignupPage() {
    return <Signup/>;
}