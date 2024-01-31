
import React, { useEffect, useState } from "react";

import { ReactComponent as LeftArrow } from "../../../../assests/LeftArrow.svg";
import { useSwiper } from "swiper/react"





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
                {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
                
            </div>
        )
}

export default CarouselLeftNavigation;