import {Clock, CoinsIcon} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import {memo} from "react";
import {useNavigate} from "react-router";

export type ItemType = "transaction" | "order" | "notice";

 function Item({ typ }: { typ: ItemType }) {
  return (
      <div>
        {typ === "transaction" ? (
            <Transact />
        ) : typ === "order" ? (
            <Order />
        ) : (
            <Notice />
        )}
      </div>
  );
}

const InboxItem = memo(Item);



function Transact() {
  return (
      <div role={"button"}
           className="item transact">
        <div role="button">
          <div className="icon">
            <CoinsIcon absoluteStrokeWidth />
          </div>

            <div>
                <div className="heading">
                    <h2 className="title">Payment</h2>
                    <time>
                        <Clock size={14}/>22 Oct. 2025</time>
                </div>

                <p className="description ">
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
                    pattern.
                </p>
            </div>

        </div>
      </div>
  );
}

function Order() {
    const navigate = useNavigate();
    return (
        <div role={"button"}
             className="item" onClick={()=>navigate("/account/order/896767676767")}>

            <div role="button">
                <div className="icon">
                    <FontAwesomeIcon icon={faBoxOpen}/>
                </div>

                <div>
                    <div className="heading">
                        <h2 className={"title"}>Payment notice</h2>
                        <time>
                            <Clock size={14}/> 22 Oct. 2025</time>
                </div>
                <p className="description">
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                    the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
                    pattern.
                </p>
            </div>
        </div>
      </div>
  );
}

function Notice() {

    return (
        <div role={"button"}
             className="item notice">
            <div role="button">
                <div className="icon">
                    <FontAwesomeIcon icon={faBell}/>
                </div>


                <div>
                    <div className="heading">
                        <h2 className="title">Notification</h2>
                        <time>
                            <Clock size={14}/>22 Oct. 2025</time>
                    </div>

                    <p className="description">
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
                        the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
                        pattern.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default InboxItem;

