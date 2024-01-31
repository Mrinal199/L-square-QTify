
import React, { useEffect, useState } from "react";

import { ReactComponent as RightArrow } from "../../../assests/RightArrow.svg";
import { useSwiper } from "swiper/react";

import styles from "./CarouselLeftNavigation.module.css";






function CarouselLeftNavigation() {
        const swiper = useSwiper();
        const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

        useEffect(() => {
            swiper.on("slideChange", function() {
                setIsBeginning(swiper.isBeginning);
            })
        }, []);
        return (
            <div className={styles.leftNavigation}>
                {!isBeginning && <RightArrow onClick={() => swiper.slidePrev()} />}
                
            </div>
        )
}

export default CarouselLeftNavigation;