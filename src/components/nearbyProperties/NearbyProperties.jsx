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

    const [dataHotelByCity, setDataHotelByCity] = useState([]);
    const getHotelByCity = async () => {
        const res = await hotelAPI.getHotelByCity("da nang");
        if (res.status === 200) {
            console.log("getHotelByCity", res.data.data.data);
            setDataHotelByCity(res.data.data.data);
        } else {
            setDataHotelByCity([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getHotelByCity("da nang");
    }, [])

    return (
        <div className="nearbyProperties">
            <div className="nearbyPropertiesTitle"><h1>Nearby Listed Properties</h1></div>
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
                        dataHotelByCity.map((hotel) => {
                            return (
                                <SwiperSlide key={hotel?.id}>
                                    <Feature dataHotel={hotel}/>
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