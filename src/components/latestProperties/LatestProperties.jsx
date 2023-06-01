import React, { useContext } from 'react'
import './latestProperties.css'
import Feature from "../feature/Feature";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { APP_CONTEXT } from '../../App';

SwiperCore.use([Autoplay]);

const LatestProperties = () => {
    const context = useContext(APP_CONTEXT);
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
                >
                    {
                        context.dataAllHotels.map((hotel, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Feature dataHotel={hotel} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div >
    )
}

export default LatestProperties