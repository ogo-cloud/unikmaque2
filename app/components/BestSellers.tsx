import {animate, m, MotionConfig, stagger, useInView} from "motion/react";
import footwear from "~/img/items/shoes1.jpg";
import {naira} from "~/lib/number-formatter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faChevronLeft, faChevronRight, faParachuteBox,

    faStar
} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStartLight} from "@fortawesome/free-regular-svg-icons";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {A11y,Mousewheel,Navigation} from "swiper/modules";
import _ from "lodash";
import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import items from "~/components/items";
import {Link} from "react-router";
import shoes from "~/img/items/nike-5644799_1280.jpg";
import watch from "~/img/items/61P4zs9sXuL._AC_SY695_.jpg";
import bags from "~/img/items/81VXS3b3rRL._AC_SY695_.jpg";
import jacket from "~/img/items/jacket.jpg";
import jacket2 from "~/img/items/jacket2.jpg";
import native from "~/img/items/men_native.jpg";
import jeans from "~/img/items/jeans.jpg";
import {delay} from "motion";






function SlidesButton() {
    const swiper= useSwiper();
 const items = _.range(1, 10);
    return (<>
                <button className={"slide_btn prev"} onClick={() => swiper.slidePrev()}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} size={"2xl"}/>
                </button>
                <button className={"slide_btn next"} onClick={() => swiper.slideNext()}>
                    <FontAwesomeIcon icon={faChevronCircleRight} size={"2xl"}/>
                </button>
    </>);
}




function Category() {
    const imgs = [
        {name:"Snickers", img:shoes},
        {name:"Rolex watch", img:watch},
        {name:"Designers jacket", img:jacket2},
        {name:"boyfriend jeans", img:jeans},
        {name:"native wear", img:native},
        {name:"jacket", img:jacket},
    ];
  const boxes = useRef<null| HTMLDivElement>(null);
  const isInView = useInView(boxes);


    useEffect(()=>{
     animate(".box",{opacity: 1, translate:0}, {delay: stagger(.5)});
    },[isInView]);
    return (
        <section id={"category"}>
            <div className={"cat_items"}>
                <div className={"board"}>
                    <h2 className={"title"}>Explore our categories</h2>
                    <p>lorem ipsum dolor sit amet consectetue consectetue adipiscing elit</p>
                    <Link to={"#"}>View More <FontAwesomeIcon icon={faChevronRight}/></Link>

                </div>

                <div className={"boxes"} ref={boxes}>
                        {_.map(imgs, (item, i) => (
                            <Link  to={"#"} className={"box"} key={i}>

                                <img src={item.img} alt={"cat_img"}/>
                                <strong>{item.name}</strong>
                            </Link>
                        ))}

                </div>
            </div>
        </section>
    );
}

function NewArrivals(){
    const items = _.range(1, 10);
    const MotionIcon =m .create (FontAwesomeIcon);
    return (
        <section id={"new_arrivals"} className={"override"}>
            <div className={"title"}>
                <h2>
                   <MotionIcon icon={faParachuteBox} initial={{rotate: 30, x: -10, scale: 1.5}}
                               whileInView={{rotate: 0, x: 0, scale: 1}}/>New Arrivals
                </h2>
                <Link to={"#"}>view more</Link>
            </div>
            <Swiper className={"items"} modules={[A11y, Mousewheel]} mousewheel
                    spaceBetween={10}
                    slidesPerView={1.8}
                    loop
                    breakpoints={{
                        480: {slidesPerView: 2.5},
                        640: {slidesPerView: 3.5},
                        1024: {slidesPerView: 4.5}
                    }}>
                {_.map(items, item => (
                    <SwiperSlide key={item} className={"e_items"}>

                        <div className={"fav_img"}>
                            <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={footwear} alt={"e_items"}/>
                        </div>
                        <p className={"title"}>lorem ipsum dolor sit amet, consectetue adipiscing elit</p>
                        <div>
                            <b className={"price"}>{naira.format(13000)}</b>
                            <div className={"discount"}>
                                <s>{naira.format(17500)}</s>
                                <span>{10 + item}%</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SlidesButton/>
            </Swiper>


        </section>
    );
}


export default function BestSellers() {
    const items = _.range(1, 10);
    return (
        <>
            <section id={"best_sellers"}>
                <div className={"title"}>
                    <h2>
                        <FontAwesomeIcon icon={faStartLight} beat/> Best Sellers
                    </h2>
                    <Link to={"#"}>view more</Link>
                </div>
                <Swiper className={"items"} modules={[A11y, Mousewheel]} mousewheel
                        spaceBetween={10}
                        slidesPerView={1.8}
                        loop
                        breakpoints={{
                            480: {slidesPerView: 2.5},
                            640: {slidesPerView: 3.5},
                            1024: {slidesPerView: 4.5}
                        }}>
                    {_.map(items, item => (
                        <SwiperSlide key={item} className={"e_items"}>

                            <div className={"fav_img"}>
                                <m.img whileHover={{scale: 1.05}} initial={{scale: 1}} src={footwear} alt={"e_items"}/>
                            </div>
                            <p className={"title"}>lorem ipsum dolor sit amet, consectetue adipiscing elit</p>
                            <div>
                                <b className={"price"}>{naira.format(13000)}</b>
                                <div className={"discount"}>
                                    <s>{naira.format(17500)}</s>
                                    <span>{10 + item}%</span>
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
                    ))}
                    <SlidesButton/>
                </Swiper>


            </section>
            <Category/>
            <NewArrivals/>
        </>

    );
}