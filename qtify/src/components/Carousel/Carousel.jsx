import React, { useEffect } from "react";
import { Navigation } from 'swiper';


import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import styles from "./Carousel.module.css";
// Import Swiper styles
import 'swiper/css';

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    return <></>;
}

function Carousel ({ data , renderComponent }) {
    return (
        <div className={styles.wrapper}>
                <Swiper
                
                style = {{padding: "0px 20px"}}
                 modules={[Navigation]}
                 initialState={0}
                spaceBetween={40}               
                slidesPerView={"auto"}
                allowTouchMove
                >
                    <Controls  data={data} />
                    <div className={styles.navbarShow}>
                    <CarouselLeftNavigation />
                    <CarouselRightNavigation />
                    </div>
                    {data.map((ele, index) => (
                        <SwiperSlide key={ele.id || index}>{renderComponent(ele)}</SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
    
}

export default Carousel;