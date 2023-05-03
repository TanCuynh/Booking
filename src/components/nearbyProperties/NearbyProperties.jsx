import React from 'react'
import './nearbyProperties.css'
import Feature from '../feature/Feature'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const NearbyProperties = () => {
    return (
        <div className="nearbyProperties">
            <div className="nearbyPropertiesTitle"><h1>Nearby Listed Properties</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="nearbyPropertiesItem">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={() => console.log('Slide Change')}
                    onSwiper={(swiper) => console.log(swiper)}
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

export default NearbyProperties