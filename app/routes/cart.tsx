import type { Route } from "./+types/cart";

import { lazy} from "react";
import Home from "app/components/Home";



export function meta({}: Route.MetaArgs) {
    return [
        { title: "Unikmaque | Shopping cart"  },
        { name: "description", content: "Check out your items in the cart " },
    ];
}

const Cart =lazy(()=>import("~/components/Cart"));
export default function CartPage()  {
    return <Cart />;
}