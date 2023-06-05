import React, { useContext, useEffect, useState } from 'react'
import './latestProperties.css'
import Feature from "../feature/Feature";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.min.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
// import { APP_CONTEXT } from '../../App';
import hotelAPI from '../../api/hotelAPI';

SwiperCore.use([Autoplay]);

const LatestProperties = () => {
    // const context = useContext(APP_CONTEXT);
const [dataLatestHotel, setDataLatestHotel] = useState([]);
const getDataLatestHotel = async () => {
    const res = await hotelAPI.getLatestHotel();
    if (res.status === 200) {
        console.log("getLatestHotels", res.data.data);
        setDataLatestHotel(res.data.data);
    } else {
        setDataLatestHotel({});
        console.log("Error");
    }
}
useEffect(() => {
    getDataLatestHotel();
}, [])

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
                        dataLatestHotel.map((hotel) => {
                            return (
                                <SwiperSlide key={hotel?.id}>
                                    <Feature dataHotel={hotel}/>
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