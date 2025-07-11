import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Autoplay, EffectFade,A11y} from "swiper/modules";
import {Navigation} from "swiper/modules";




import makeup from "~/img/advert/61zAjw4bqPL._SX3000_.jpg";
import cream from "~/img/advert/5b1a1ae8-52a4-4199-9ff4-af8dfe431a71.__CR0,0,1464,625_PT0_SX1464_V2___.jpg";
import serum from "~/img/advert/5b1a1ae8-52a4-4199-9ff4-af8dfe431a71.__CR0,0,1464,625_PT0_SX1464_V1___.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faChevronCircleLeft, faChevronCircleRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";


function SlideNavigation(){
    const slide = useSwiper();
    return(
        <>
        <div className={"slide_btn start"}>
            <button onClick={() => slide.slidePrev()}>
                <FontAwesomeIcon icon={faChevronCircleLeft} size={"2xl"}/></button>

        </div>
        <div className={"slide_btn end"}>
            <button onClick={() => slide.slideNext()}>
                <FontAwesomeIcon icon={faChevronCircleRight} size={"2xl"}/></button>

        </div>
    </>);
}

export default function BannerAdvert() {

    return (
        <section className={"advert"}>
            <Swiper autoplay loop modules={[Autoplay, EffectFade, A11y]}>

                <SwiperSlide>
                    <img src={makeup} alt={"make up"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={serum} alt={"cover3"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cream} alt={"make up"}/>
                </SwiperSlide>
              <SlideNavigation/>
            </Swiper>


        </section>
    );
}