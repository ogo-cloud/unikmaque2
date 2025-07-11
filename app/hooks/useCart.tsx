import AddToCart from "~/contexts/AddToCart";
import {useContext} from "react";
import {AddToCartContext} from "~/contexts/AddToCart";

export default function useCart(){
    return useContext(AddToCartContext);
}