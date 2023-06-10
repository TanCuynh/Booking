import React, { useEffect, useState } from 'react'
import './topRateProperties.css'
import Feature from '../feature/Feature'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import hotelAPI from '../../api/hotelAPI'

SwiperCore.use([Autoplay]);

const TopRateProperties = () => {

    const [dataLowCostHotel, setDataLowCostHotel] = useState([]);
    const getDataLowCostHotel = async () => {
        const res = await hotelAPI.getLowCostHotel();
        if (res.status === 200) {
            setDataLowCostHotel(res.data.data);
        } else {
            setDataLowCostHotel([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getDataLowCostHotel();
    }, [])

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
                    {
                        dataLowCostHotel.map((hotel) => {
                            return (
                                <SwiperSlide key={hotel?.id}>
                                    <Feature dataHotel={hotel} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TopRateProperties