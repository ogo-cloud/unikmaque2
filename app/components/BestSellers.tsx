import {m} from "motion/react";
import footwear from "~/img/items/shoes1.jpg";
import {naira} from "~/lib/number-formatter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStartLight} from "@fortawesome/free-regular-svg-icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y,EffectFade,Mousewheel,} from "swiper/modules";


export  default function BestSellers() {
    return (
        <section id={"best_sellers"}>
            <h2>Best Sellers</h2>
            <Swiper className={"items"} modules={[A11y,EffectFade,Mousewheel]} effect={"fade"} spaceBetween={10} slidesPerView={3}
                    breakpoints={{
                        "768px":{slidesPerView:4},
                        "1024px": {slidesPerView: 5},
                    }}>
                <SwiperSlide className={"e_items"}>

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
                </SwiperSlide>
            </Swiper>

        </section>
    );
}
