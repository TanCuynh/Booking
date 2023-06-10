import React from 'react'
import './topRateProperties.css'
import Feature from '../feature/Feature'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const TopRateProperties = () => {
    return (
        <div className="topRateProperties">
            <div className="topRatePropertiesTitle"><h1>Top Low-Cost Hotels</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="topRatePropertiesItem">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    <div className="next"></div>
                    <div className="prev"></div>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default TopRateProperties