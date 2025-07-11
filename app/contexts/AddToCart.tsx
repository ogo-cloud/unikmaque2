import {createContext, type ReactNode, useCallback, useEffect, useState, useTransition} from "react";
import _ from "lodash";

type Props = {
    items: any [],
    addCart: (item:any) =>void,
    deleteCart: (item:any) =>void,
    loading: boolean,
};


export const AddToCartContext = createContext<Props>({
    items: [],
    addCart: () :void => {},
    deleteCart: () :void => {},
    loading: false,
})

export default function AddToCart({ children}: {children: ReactNode}) {
   const [items, setItems] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

   const addCart = ((item: any ) => {
       startTransition(() => {
           setItems(prevState => _.uniq([...prevState, item]));
       });

       const storedItems = localStorage.getItem("items");
       if (storedItems) {
           localStorage.setItem("items", JSON.stringify(_.concat(JSON.parse(storedItems), [items])));
       }else {
           localStorage.setItem("items", JSON.stringify([items]) );
       }
    })



    const deleteCart =useCallback(
        (item: any)=>{
      const updatedItems = _.filter(items, (it) =>it.id!==item.id);
        startTransition(()=>{
            setItems(updatedItems);
        })
        localStorage.setItem("items", JSON.stringify(updatedItems));
    },  [items]);


    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        if (storedItems && !isPending) {
            setItems(JSON.parse(storedItems));
        }
    }, [isPending]);

    return (
        <AddToCartContext value={{ items, addCart, deleteCart,loading: isPending }}>
            {children}
        </AddToCartContext>
    );
}