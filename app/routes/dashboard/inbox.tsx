import {lazy} from "react";
import type { Route } from "./+types/inbox";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Inbox"  },
        { name: "description", content: "View your message " },
    ];
}
const Inbox = lazy(() => import("~/components/user/Inbox"));
export default function InboxPage() {
    return (
        <Inbox/>
    )
        ;
}