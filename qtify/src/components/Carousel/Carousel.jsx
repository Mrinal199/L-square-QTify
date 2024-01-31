import React, { useEffect } from "react";
import { Navigation } from 'swiper';
import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);
    return <></>;
}

function Carousel ({data , renderComponent}) {
    return (
        <div className={styles.wrapper}>
                <Swiper
                
                style = {{padding: "0px 20px"}}
                initialState={0}
                spaceBetween={40}
                
                modules={[Navigation]}
                slidesPerView={"auto"}
                allowTouchMove
                >
                    <Controls  data={data} />
                    
                    <CarouselRightNavigation />
                    <CarouselLeftNavigation />
                    {data.map((ele, idx) => (
                        <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
    
}

export default Carousel;