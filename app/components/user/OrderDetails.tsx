import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faLocationPin, faMap, faMapLocationDot, faMapPin,
  faRoad,
  faShippingFast,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  BoxIcon,
  Calendar,
  Calendar1,
  CalendarIcon,
  GiftIcon,
  PinIcon,
} from "lucide-react";
import jackets2 from "~/img/items/jacket2.jpg";

import {naira} from "~/lib/number-formatter";

export default function OrderDetailsPage({ orderId }: { orderId: string }) {
  return (
    <section id={"order-details"}>
      <div
        className={
          "container max-w-4xl mx-auto mt-10 bg-white shadow-lg p-3 md:p-5 flex flex-col justify-center gap-y-5 rounded-sm"
        }
      >
        <div className={"order"}>
            <h1 className={"title"}>12" bob hair</h1>
          <p>Order ID: <b>#{orderId}</b></p>
          <div>
            <div className={"label"}>Payment</div>
            <p>Method: <b>Bank delivery</b></p>
            <p>Item value: <span><b>{naira.format(4000)}</b><i> (2 pieces )</i></span></p>
            <p>Delivery fee: <b>{naira.format(2000)}</b></p>
            <p>Total: <b>{naira.format(42000)}</b></p>
          </div>

          <div>
            <div className={"label"}>Delivery</div>
            <p>Method: <b>Pick up</b></p>
            <p>Address : <b>No: 27 Abakpa nike</b></p>
          </div>
        </div>
        <div className={"stages"}>
          <div className={"stage"}>
            <div className={"stopper"}>
            <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div className={"details"}>
              <time>
                <CalendarIcon size={16} /> 27 October 2025
              </time>
              <p className={"status"}>
                In progress <FontAwesomeIcon icon={faSpinner} spin />
              </p>
              <p className={"location"}>
                <GiftIcon size={16} />
                Sorting center
              </p>
            </div>
          </div>
          <div className={"stage"}>
            <div className={"stopper"}>
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div className={"details"}>
              <time>
                <CalendarIcon size={16} /> 29 October 2025
              </time>
              <p className={"status"}>
                Shipped <FontAwesomeIcon icon={faShippingFast} />
              </p>
              <p className={"location"}>
                <FontAwesomeIcon icon={faRoad} size={"sm"} />
                On the way
              </p>
            </div>
          </div>

          <div className={"stage"}>
            <div className={"stopper"}>
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div className={"details"}>
              <time>
                <CalendarIcon size={16} /> 30 October 2025
              </time>
              <p className={"status"}>
                 <FontAwesomeIcon icon={faMapLocationDot} /> Kenya
              </p>
              <p className={"location"}>
                <FontAwesomeIcon icon={faRoad} size={"sm"} />
                Moved
              </p>
            </div>
          </div>

          <div className={"stage active"}>
            <div className={"stopper"}>
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div className={"details"}>
              <time>
                <CalendarIcon size={16} /> 31 October 2025
              </time>
              <p className={"status"}>
                 <FontAwesomeIcon icon={faMapLocationDot} /> United States
              </p>
              <p className={"location"}>
                <FontAwesomeIcon icon={faRoad} size={"sm"} />
                Current location
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
