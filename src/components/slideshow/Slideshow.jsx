import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './slideshow.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Slideshow = ({ images }) => {
    return (
        <div className="slideshow">
            <div className="big-image">
                <Swiper navigation={true} pagination={true}>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slideshow;