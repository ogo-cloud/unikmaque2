import _ from "lodash";

import InboxItem, {type ItemType } from "~/components/InboxItem";
import {Button} from "~/components/ui/button";
import {Gift, Receipt, SlidersHorizontal, XIcon} from "lucide-react";
import {useMemo, useState, Activity} from "react";
import {Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import {TooltipArrow} from "@radix-ui/react-tooltip";




export default function inbox() {
    const arr:Array<{typ: ItemType, id:number}>= [

            { typ : "transaction", id:_.random(100000 , 200000) },
        { typ : "order", id:_.random(100000 , 200000) },
        { typ : "notice", id:_.random(100000 , 200000) },
            { typ : "transaction", id:_.random(100000 , 200000) },
        { typ : "order", id:_.random(100000 , 200000) },
        { typ : "notice", id:_.random(100000 , 200000) }
    ];

    const [cat, setCat] = useState<ItemType|undefined>(undefined);

    const filteredItems= useMemo(() =>  {
     if (!cat) {
         return arr;
     }else {
         return _.filter(arr, item => item.typ === cat);
     }
    },[cat]);


    return (
        <div id={"inbox-container"}>
            <div className={"filter"}>
                <div className={"filters"}>
                    <Button className={"new"} onClick={()=>setCat("order")}>
                        <Gift/> <span className={"label"}>Orders</span>
                    </Button>

                    <Button className={"new"} onClick={()=>setCat("transaction")}>
                        <Receipt/> <span className={"label"}>Transactions</span>
                    </Button>
                    <Button className={"new"} onClick={()=>setCat("notice")}>
                        <span className={"label"}> Others</span>
                    </Button>


                    {cat&&
                        <Tooltip>
                            <TooltipTrigger className={"clear"} onClick={()=>setCat(undefined)}>
                                <XIcon />
                            </TooltipTrigger>

                            <TooltipContent className={"tooltip-s"}>
                                Clear filter
                            </TooltipContent>
                        </Tooltip>
                    }

                </div>
                <Button className={"shadow-none"}>
                    <SlidersHorizontal/> Sort by date
                </Button>
            </div>
            <div className={"inbox"}>
                {_.map(filteredItems, (item) => (<InboxItem typ={item.typ}/>))}
            </div>

        </div>
    )


}