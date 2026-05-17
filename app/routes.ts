import {
    type RouteConfig,
    index,
    route,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    layout( "routes/layout.tsx", [
            index("routes/home.tsx"),
            route("account/signup", "routes/signup.tsx"),
            route("cart", "routes/cart.tsx"),
            route("account/login", "routes/login.tsx")
        ]),
    layout("routes/dashboard/layout.tsx",[
        ...prefix("account",[
            route("profile", "routes/dashboard/profile.tsx"),
            route("inbox", "routes/dashboard/inbox.tsx"),


            ...prefix("track", [
                index("routes/dashboard/track.tsx"),
                route(":orderId", "routes/dashboard/tracking.tsx"),
            ])
        ]),
        ]),
] satisfies RouteConfig;
