import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout(
        "routes/layout.tsx",
        [
            index("routes/home.tsx"),
            route("account/signup", "routes/signup.tsx"),
            route("cart", "routes/cart.tsx"),
            route("account/login", "routes/login.tsx")

        ])
] satisfies RouteConfig;
