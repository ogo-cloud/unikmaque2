import footwear from "~/img/items/shoes1.jpg";
import shoes from "~/img/items/nike-5644799_1280.jpg";
import watch from "~/img/items/61P4zs9sXuL._AC_SY695_.jpg";
import bags from "~/img/items/81VXS3b3rRL._AC_SY695_.jpg";
import jacket2 from "~/img/items/jacket2.jpg";
import native from "~/img/items/men_native.jpg";
import jeans from "~/img/items/jeans.jpg";
import jacket from "~/img/items/jacket.jpg";




import {naira} from "~/lib/number-formatter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStartLight}from "@fortawesome/free-regular-svg-icons";
import {m} from "motion/react";


export default function Main(){

    return (
        <main className={"main_items"}>
            <div className={"items"}>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={footwear} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jacket2} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={bags} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={shoes} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jeans} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jacket} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={watch} alt={"e_items"}/>
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
                </div>
                <div className={"e_items"}>
                    <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={native} alt={"e_items"}/>
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
                </div>

            </div>

        </main>
    )
}