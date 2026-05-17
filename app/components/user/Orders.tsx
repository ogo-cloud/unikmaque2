import { Calendar, Clock, PackageOpen } from "lucide-react";
import jackets2 from "~/img/items/jacket2.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { naira } from "~/lib/number-formatter";
import BadgeCopy from "~/components/BadgeCopy";
import {Link} from "react-router";

export default function Orders() {
  return (
    <>
      {/* NO ITEM STYLED --- HIDDEN BY DEFAULT*/}
      <div className={"flex-col h-full items-center text-gray-400 hidden"}>
        <PackageOpen absoluteStrokeWidth size={80} />
        <p className={"text-2xl"}>No Orders</p>
      </div>

      <Accordion
        type="single"
        collapsible
        //defaultValue="item-1"

        className={
          "sm:max-w-lg md:max-w-2xl mx-auto flex items-center flex-col w-full h-full bg-white rounded-lg p-3 sm:p-5"
        }
      >
        <div className={"items w-full"}>
          {/*ORDERED DETAILS*/}
          <div className={"item flex gap-3"}>
            <div
              className={
                "timestamp flex flex-col border-r-2  border-pink-300 px-5 py-3 text-gray-500 max-md:hidden"
              }
            >
              <div className={"flex items-center gap-2"}>
                <Calendar className={"text-cyan-600"} size={12} />{" "}
                <span className={"whitespace-nowrap"}>20, August, 2025</span>
              </div>
              <div className={"flex items-center gap-2"}>
                <Clock className={"text-cyan-600"} size={12} />{" "}
                <span className={"whitespace-nowrap"}>10.00 AM</span>{" "}
              </div>
            </div>

            <AccordionItem
              value={"item-1"}
              className={
                "order-details grow bg-pink-50 px-5 py-2 border-b! border-pink-200! mb-1"
              }
            >
              <AccordionTrigger
                className={
                  "flex items-center gap-5 hover:no-underline p-0 hide-chevron"
                }
              >
                <div>
                  <img
                    src={jackets2}
                    alt={"jacket for fashion"}
                    className={"max-w-24"}
                  />
                </div>
                <div className={"grow"}>
                  <h3 className={"text-xl font-semibold mb-1 truncate"}>
                    Order Title
                  </h3>
                  <div
                    className={"flex md:items-center gap-x-2 max-md:flex-wrap"}
                  >
                    <div>
                      <span className={"text-pink-600"}>Price:</span>{" "}
                      <b>{naira.format(3000)}</b>
                    </div>
                    <div>
                      <BadgeCopy
                        text={"789382928"}
                        iconSize={16}
                        className={"gap-2"}
                      >
                        <span className={"text-pink-600"}>Order ID:</span>{" "}
                        789382928
                      </BadgeCopy>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className={"flex flex-col gap-5 text-balance"}>
                <p>
                  Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres
                    to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                  design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                </p>
                <p>
                  Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres
                  to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
                  design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                </p>
                <Link
                    to={"/account/track/789382928/#order-details"}
                    className={"text-center bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 font-medium"}>Track order</Link>
              </AccordionContent>

              <div
                className={
                  "timestamp flex items-center gap-3 px-3 py-1 h-max text-gray-500 md:hidden text-sm border-l-2 border-pink-300"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <Calendar className={"text-cyan-600"} size={12} /> 20, August,
                  2025
                </div>
                <div className={"flex items-center gap-2"}>
                  <Clock className={"text-cyan-600"} size={12} /> 10.00 AM
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </>
  );
}
