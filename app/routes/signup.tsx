import type { Route } from "./+types/signup";
import Signup from "~/components/Signup";



export function meta({}: Route.MetaArgs) {
    return [
        { title: "UnikMaque | Signup"  },
        { name: "description", content: "Create an account and start placing your order " },
    ];
}

export default function SignupPage() {
    return <Signup/>;
}