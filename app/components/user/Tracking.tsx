import OrderTrack from "~/components/user/OrderTrack";
import OrderDetails from "~/components/user/OrderDetails";
import type {Params} from "react-router";
import {memo} from "react";


type CustomParams = { params: Params };

function Track({ params }: CustomParams) {
  return <>{params?.orderId ? <OrderDetails orderId={params.orderId} /> : <OrderTrack />}</>;
}


const Tracking = memo(Track);

export default Tracking;