import type { Route } from "./+types/login";

import {lazy} from "react";




export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Sign in"  },
        { name: "description", content: "Login into your account to explore goodies" },
    ];
}

const Login = lazy(() =>import("~/components/Login"))
export default function LoginPage() {
    return <Login />;
}
