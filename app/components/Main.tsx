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
import {faArrowRightLong, faCartPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faStar as faStartLight} from "@fortawesome/free-regular-svg-icons";
import {m} from "motion/react";
import love_grad from "~/img/love-removebg-preview.png";
import {useState} from "react";
import {delay} from "motion";
import {Link} from "react-router";
import BestSellers from "~/components/BestSellers";



export default function Main(){
    return (
        <main className={"main_items"}>
            <div className={"items"}>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={footwear} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={watch} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jacket2} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={native} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={shoes} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={bags} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jeans} alt={"e_items"}/>
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
                </m.div>
                <m.div initial={{opacity: 0, visibility:"hidden", y:20}}
                         whileInView={{opacity: 1, visibility:"visible", y:0}}
                       transition={{delay: 2}}
                    className={"e_items"}>
                    <div className={"fav_img"}>
                        <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={jacket} alt={"e_items"}/>
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
                </m.div>

            </div>
            <div className={"view_more"}>
                <hr/>
                <Link to={"#"}>See more <FontAwesomeIcon icon={faArrowRightLong}/></Link>
            </div>
            <BestSellers/>
        </main>
    )
}