
import type { Route } from "./+types/track";
import {lazy} from "react";
import type {Params} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Tracking"  },
        { name: "description", content: "Track your order" },
    ];
}
const Tracking = lazy(() => import("~/components/user/Tracking"));
export default function TrackingPage({ params }: { params: Params }) {
    return  <Tracking params={params} />;
}