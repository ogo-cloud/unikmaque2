import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout(
        "routes/layout.tsx",
        [
            index("routes/Home.tsx"),
            route("account/signup", "routes/signup.tsx")

        ])
] satisfies RouteConfig;
