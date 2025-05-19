import {Link} from "react-router";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, EffectFade} from "swiper/modules";
import wear from "~/img/wear.jpg";
import sleep from "~/img/sleep-wear.jpg";
import short from "~/img/short.jpg";

export default function Category(){
    return (<div className="category">
        <Link to={"#"} className={"banner"}>
            <Swiper
                slidesPerView={1}
                modules={[Autoplay, EffectFade, A11y]}
                autoplay={{delay: 1000, waitForTransition: true}}
                effect={"fade"}
                loop

            >

                <SwiperSlide><img src={wear} alt={"ladies-wear"}/></SwiperSlide>
                <SwiperSlide><img src={sleep} alt={"mens-wear"}/></SwiperSlide>
                <SwiperSlide><img src={short} alt={"jeans"}/></SwiperSlide>


            </Swiper>
        </Link>
        <div className={"links"}>
            <Link to="/docs">
                <b>Men's wears</b>
                <small>Re-usable components built using Radix UI and Tailwind.</small>

            </Link>
            <Link to="/docs">
                <b>Women's wears</b>
                <small>Re-usable components built using Radix UI and Tailwind.</small>

            </Link>
            <Link to="/docs">
                <b>Kiddies</b>
                <small>Re-usable components built using Radix UI and Tailwind.</small>

            </Link>
        </div>
    </div>);
}