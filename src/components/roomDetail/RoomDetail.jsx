import React, { useContext, useEffect, useState } from 'react'
import './roomDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCheck, faDoorOpen, faMountainSun, faShower, faVolumeXmark, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import Slideshow from '../slideshow/Slideshow'
import categoryAPI from '../../api/categoryAPI'
import { safetyHygieneOptions } from '../../pages/hostPage/hostCreateHotel/option'
import { useNavigate } from 'react-router-dom'
import { bookingAPI } from '../../api/bookingAPI'
import { APP_CONTEXT } from '../../App'
import { toast } from 'react-hot-toast'

const RoomDetail = ({ room, date, categoryId, onClose, emptyRoom, idHotel, dateParams }) => {

    const context = useContext(APP_CONTEXT);

    const navigate = useNavigate();

    const [dataCategoryDetail, setDataCategoryDetail] = useState({});
    const [categoryImages, setCatetogyImages] = useState([]);
    const [bathroomOptions, setBathroomOptions] = useState([]);
    const [directionsViewOptions, setDirectionsViewOptions] = useState([]);
    const [amenitiesOptions, setAmenityOptions] = useState([]);

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    const duration = calculateDays(dateParams.dateStart, dateParams.dateEnd);

    const getDataCategoryDetail = async () => {
        const res = await categoryAPI.getCategoryById(categoryId);
        if (res.status === 200) {
            setDataCategoryDetail(res.data.data);
            setCatetogyImages(res.data.data.category_images);
            setBathroomOptions(res.data.data.bathroom_facilities.split(","));
            setDirectionsViewOptions(res.data.data.directions_view.split(","));
            setAmenityOptions(res.data.data.amenities.split(","));
        } else {
            setDataCategoryDetail({});
            console.log("Error");
        }
    }
    const createBooking = async () => {
        const res = await bookingAPI.createBooking({
            description: "nothing",
            date_in: dateParams.dateStart,
            date_out: dateParams.dateEnd,
            hotel_id: +idHotel,
            room_id: emptyRoom,
            room_count: +room
        });
        if (res.status === 200) {
            localStorage.setItem('bookingId', res.data.data.booking.id);

        } else {
            console.log('Error creating booking', res);
        }
    }

    const handleBooking = () => {
        if (context.user.role !== "user") {
            toast.error("You can't make any booking requests if you are a host");
            navigate('/');
        } else {
            navigate('/booking', { state: { dataCategoryDetail, room, duration } });
            createBooking();
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
                    <div className="roomDetailIntroduction">
                        <h3 className='roomDetailName'>{dataCategoryDetail?.name}</h3>
                    </div>
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
                            <div className="roomDetailRoomsAvailable">
                                <span>You book {room} rooms</span>
                            </div>
                            <span>{emptyRoom.length} rooms available</span>
                        </div>
                    </div>
                    <div className="roomDetailPrice">
                        <span>$ {dataCategoryDetail?.price} USD <small>for 1 night per room</small></span>
                    </div>
                </div>
                <div className="roomDetailBookingBtnContainer">
                    <div className="roomDetailBookingBtn" onClick={handleBooking}>
                        <span>Book Now</span>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faXmark} className='roomDetailCloseBtn' onClick={handleClose} />
        </div>
    )
}

export default RoomDetail