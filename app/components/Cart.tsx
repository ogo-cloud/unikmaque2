import useCart from "~/hooks/useCart";
import {useEffect} from "react";
import _ from "lodash";

export default function Cart(){
    const {items, deleteCart} = useCart();

    useEffect(()=> {
        console.log(items);
    }, [items])

    return(<div className={"mt-20"}>{_.map(items, (item,i) => (
      <div key={item.id}>
          {item.name} <button className={"bg-red-600 text-white"} onClick={() =>{deleteCart(item)}}>delete</button>
      </div>
    ))} </div>);




}