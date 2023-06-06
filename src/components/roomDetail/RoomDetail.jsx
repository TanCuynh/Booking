import React, { useEffect, useState } from 'react'
import './roomDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCheck, faDoorOpen, faMountainSun, faShower, faVolumeXmark, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import Slideshow from '../slideshow/Slideshow'
import categoryAPI from '../../api/categoryAPI'
import { safetyHygieneOptions } from '../../pages/hostPage/hostCreateHotel/option'

const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/213244036.jpg?k=4d029a6a277dda491d6c94398932e9f7ece6e3c76fa5062131ca354c4ca8edc2&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418397.jpg?k=41d6819de7f349f0ee02538d5a1a038259156dccaefd22d5fb1c7a994339335f&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417991.jpg?k=78d702994684868968bae67a1b5a853253b787c085e66cad5046a38bf13a0bfc&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417930.jpg?k=ee526dbfec57be575b9bc6672fd47162da4a8a7ce9ba1e9b30822197c00d1dde&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417240.jpg?k=a9c9e129b69144eaa5dc9ad01dc9de503ee1582d472a33191c8679622ab55ef0&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/373917970.jpg?k=e9ca04d3911f6ff3dc37e1a157b2baa9fefd9871c0f9ec905cbac61809c8bca8&o=&hp=1",
];

const RoomDetail = ({ categoryId, onClose }) => {

    const [dataCategoryDetail, setDataCategoryDetail] = useState({});
    const [categoryImages, setCatetogyImages] = useState([]);
    const [bathroomOptions, setBathroomOptions] = useState([]);
    const [directionsViewOptions, setDirectionsViewOptions] = useState([]);
    const [amenitiesOptions, setAmenityOptions] = useState([]);


    console.log("id", categoryId);

    const getDataCategoryDetail = async () => {
        const res = await categoryAPI.getCategoryById(categoryId);
        if (res.status === 200) {
            console.log("getCategoryById", res.data.data);
            setDataCategoryDetail(res.data.data);
            setCatetogyImages(res.data.data.category_images);
            setBathroomOptions(res.data.data.bathroom_facilities.split("\n"));
            setDirectionsViewOptions(res.data.data.directions_view.split("\n"));
            setAmenityOptions(res.data.data.amenities.split("\n"));
        } else {
            setDataCategoryDetail({});
            console.log("Error");
        }
    }
    useEffect(() => {
        getDataCategoryDetail();
    }, [])



    const handleClose = () => {
        onClose();
    };

    return (
        <div className="roomDetailContainer">
            <div className="roomDetailDesc">
                <div className="roomDetailImgContainer">
                    <div className="roomDetailImgSlideshowContainer">
                        <Slideshow images={categoryImages.map((categoryImage) => categoryImage.image_url)} className='roomDetailSlideshow' />
                    </div>
                </div>
                <div className="roomDetailContentContainer">
                    <h3 className='roomDetailName'>{dataCategoryDetail?.name}</h3>
                    <div className="roomDetailBedType">
                        <span>{dataCategoryDetail?.bed} bed</span>
                        <FontAwesomeIcon icon={faBed} />
                    </div>
                    <div className="roomDetailDescContent">
                        <span>In your private bathroom:</span>
                        <div className="roomDetailDescContentContainer">
                            {
                                bathroomOptions.map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem" key={index}>
                                            <FontAwesomeIcon icon={faCheck} />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="roomDetailDescContent">
                        <span>Direction of vision:</span>
                        <div className="roomDetailDescContentContainer">
                            {
                                directionsViewOptions.map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem" key={index}>
                                            <FontAwesomeIcon icon={faCheck} />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="roomDetailDescContent">
                        <span>Room amenities:</span>
                        <div className="roomDetailDescContentContainer">
                            {
                                amenitiesOptions.map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem" key={index}>
                                            <FontAwesomeIcon icon={faCheck} />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomDetailBookingContainer">
                <div className="roomDetailPriceContainer">
                    <div className="roomDetailPriceDesc">
                        <div className="roomDetailPriceDescTitle">
                            <h3>{dataCategoryDetail?.name}</h3>
                        </div>
                        <div className="roomDetailPriceDescContent">
                            <span>{dataCategoryDetail?.bed} bed</span>
                            <FontAwesomeIcon icon={faBed} />
                        </div>
                        <div className="roomDetailAvailableRooms">
                            <span>2 rooms</span>
                        </div>
                    </div>
                    <div className="roomDetailPrice">
                        <span>$ 2000 USD for 2 nights</span>
                    </div>
                </div>
                <div className="roomDetailBookingBtnContainer">
                    <div className="roomDetailBookingBtn">
                        <span>Book Now</span>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faXmark} className='roomDetailCloseBtn' onClick={handleClose} />
        </div>
    )
}

export default RoomDetail