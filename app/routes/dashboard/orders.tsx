import {lazy} from "react";
import type { Route } from "./+types/orders";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Orders"  },
        { name: "description", content: "View your message " },
    ];
}
const Orders = lazy(() => import("~/components/user/Orders"));
export default function OrdersPage() {
    return (
        <Orders/>
    )
        ;
}