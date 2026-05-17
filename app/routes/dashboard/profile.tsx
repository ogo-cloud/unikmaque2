import {lazy} from "react";
import type { Route } from "./+types/profile";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Profile"  },
        { name: "description", content: "Manage your profile " },
    ];
}
const Profile = lazy(() => import("~/components/user/Profile"));
export default function ProfilePage() {
    return (
        <Profile/>
        )
    ;
}