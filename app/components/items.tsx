import {m} from "motion/react";
import footwear from "~/img/items/shoes1.jpg";
import love_grad from "~/img/love-removebg-preview.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar as faStartLight} from "@fortawesome/free-regular-svg-icons";
import {naira} from "~/lib/number-formatter";
import {faCartPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function items(){
    const [liked, setLiked] = useState(false);
    return (

        <m.div initial={{opacity: 0, visibility: "hidden", y: 20}}
               whileInView={{opacity: 1, visibility: "visible", y: 0}}
               transition={{delay: 2}}
               className={"e_items"}>
            <div className={"fav_img"}>
                <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={footwear} alt={"e_items"}/>
                <button className={"fav_btn"} onClick={() => setLiked(!liked)}>
                    {liked ?
                        <m.img src={love_grad} alt={"favorite"} whileInView={{scale: 1.2}} initial={{scale: .5}}/> :
                        <FontAwesomeIcon icon={faHeart} size={"lg"}/>
                    }
                </button>
            </div>
            <p className={"title"}>lorem ipsum dolor sit amet, consectetue adipiscing elit</p>
            <div>
                <b className={"price"}>{naira.format(13000)}</b>
                <div className={"discount"}>
                    <s>{naira.format(17500)}</s>
                    <span>10%</span>
                </div>
            </div>

            <div className={"rating"}>
                <div className={"stars"}>

                    <FontAwesomeIcon icon={faStar} size={"lg"}/>
                    <FontAwesomeIcon icon={faStar} size={"lg"}/>
                    <FontAwesomeIcon icon={faStar} size={"lg"}/>
                    <FontAwesomeIcon icon={faStar} size={"lg"}/>
                    <FontAwesomeIcon icon={faStartLight} size={"lg"}/>
                </div>
                <span>(3990)</span>

            </div>
            <small>44 items left</small>
            <button className={"add_cart"}>
                <span>Add to cart</span>
                <FontAwesomeIcon icon={faCartPlus}/>
            </button>
        </m.div>
    );
}