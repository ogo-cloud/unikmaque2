import shaper from "~/img/items/shaper.webp";
import bag from "~/img/items/5jpg.jpg";
import dress from "~/img/items/2.jpg";
import watch from "~/img/items/labies watchwebp.webp";
import jacket from "~/img/items/jacket.jpg";
import jacket2 from "~/img/items/jacket2.jpg";
import native from "~/img/items/men_native.jpg";
import jeans from "~/img/items/jeans.jpg";
import items from "~/components/items";
import _ from "lodash";
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";




export default function  groupCategory() {
    const imgs = [
        {name: "Dress",img: dress },
        {name: "bag",img: bag },
        {name: "Dress",img: dress },
        {name: "shaper",img: shaper},
];
    return(<section>
        <div className={"categories"}>

            {_.map(_.range(1, 9), (item) =>
                <div className={"category"} key={item+"a"}>
                    <h2 className={"title"}>Woman's World</h2>
                  <div className={"boxes"}>
                      {
                          _.map(imgs, (item, i) =>(
                              <Link to={"#"} className={"box"} key={i}>
                                  <div className={"thumb"} style={{backgroundImage: `url(${item.img})`}}>

                                  </div>
                                  <p>{item.name}</p>

                              </Link>
                          ))
                      }
                  </div>
                    <Link to={"#"}>see more <FontAwesomeIcon icon={faChevronRight}/></Link>
                </div>
            )}
        </div>
    </section>);


}