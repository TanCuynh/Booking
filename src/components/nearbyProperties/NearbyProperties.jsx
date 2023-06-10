import React, { useEffect, useState } from 'react'
import './nearbyProperties.css'
import Feature from '../feature/Feature'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import hotelAPI from '../../api/hotelAPI';


SwiperCore.use([Autoplay]);

const NearbyProperties = () => {

    const [dataHotelNearby, setDataHotelNearby] = useState([]);
    const getHotelNearby = async () => {
        const res = await hotelAPI.getHotelNearby();
        if (res.status === 200) {
            setDataHotelNearby(res.data.data);
        } else {
            setDataHotelNearby([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getHotelNearby();
    }, [])

    return (
        <div className="nearbyProperties">
            <div className="nearbyPropertiesTitle"><h1>Nearby Listed Hotels</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="nearbyPropertiesItem">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        dataHotelNearby.map((hotel) => {
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

export default NearbyProperties