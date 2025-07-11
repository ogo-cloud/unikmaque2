import type { Route } from "./+types/home";

import {lazy} from "react";
import Home from "app/components/Home";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Unikmaque | Ecommerce"  },
    { name: "description", content: "Classy wears at your door step " },
  ];
}

export default function HomePage() {
  return <Home />;
}
