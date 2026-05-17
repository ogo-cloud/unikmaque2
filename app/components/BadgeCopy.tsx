import React, {type HTMLProps, useCallback, type MouseEvent, useState, memo} from "react";
import { Copy } from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "~/components/ui/tooltip";



type Props = HTMLProps<HTMLDivElement> & { text: string; iconSize?: number };

function Badge(props: Props) {
    const [open, setOpen] = useState(false);
  const copy = useCallback(async (ev:MouseEvent<HTMLButtonElement>) => {
     ev.stopPropagation()
    await navigator.clipboard.writeText(props.text);
    setOpen(true);
    setTimeout(() =>  setOpen(false), 1000);
  }, [props.text]);

  return (
    <div
      {...props}
      className={
        "min-w-24 w-full px-2 py-1 bg-pink-100 flex items-center rounded-lg " +
        props.className
      }
    >
      {props.children ?? (
        <div className={"text-sm truncate  max-w-40"}>{props.text}</div>
      )}
        <Tooltip open={true} >
            <TooltipTrigger onClick={copy}>
                <Copy className={"text-pink-500"} size={props.iconSize ?? 18}/>
            </TooltipTrigger>
            {open&& <TooltipContent className={"bg-pink-500 text-white fill-pink-500 font-medium"}>
                Copied!
            </TooltipContent>
            }
        </Tooltip>
    </div>
  );
}

const BadgeCopy = memo(Badge);

export default BadgeCopy;

