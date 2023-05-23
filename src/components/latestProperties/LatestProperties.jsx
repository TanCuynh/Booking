import React from 'react'
import './latestProperties.css'
import Feature from "../feature/Feature";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);


const LatestProperties = () => {
    return (
        <div className="latestProperties">
            <div className="latestPropertiesTitle"><h1>Latest on the Property Listing</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="latestPropertiesItem">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    // onSlideChange={() => console.log('Slide Change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                    <SwiperSlide><Feature /></SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default LatestProperties