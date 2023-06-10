import React, { useEffect, useMemo, useState } from 'react'
import './hotelproperties.css'
import { RoomsTable } from '../../components'
import ReviewComment from '../../components/reviewComment/ReviewComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMagnifyingGlass, faPaw, faPhone, faStar, faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faHeart as solidHeart, faSquareParking, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faHeart as heart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { LinearProgress, Rating } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast'



const markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const HotelProperties = () => {
    const [dataHotel, setDataHotel] = useState({});
    const [safetyHygiene, setSafetyHygiene] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [categories, setCategories] = useState([]);

    const { id } = useParams();


    const remainingSafetyHygieneCount = safetyHygiene.length - 7;
    const remainingAmenitiesCount = amenities.length - 7;

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            totalDate: 0
        }
    ]);
    const [value, setValue] = React.useState(100);

    const [slideIndex, setSlideIndex] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpenPopup(true);
    }

    const handleMove = (direction) => {
        let newSlideIndex;
        if (direction === "l") {
            newSlideIndex = slideIndex === 0 ? 4 : slideIndex - 1;
        } else {
            newSlideIndex = slideIndex === 4 ? 0 : slideIndex + 1;
        }
        setSlideIndex(newSlideIndex);
    };

    const handleScroll = () => {
        const targetElement = document.querySelector('.hotelPropertiesRoomOptions');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleChangeDate = (item) => {
        const sum = calculateDays(item.selection.startDate, item.selection.endDate)
        const temp = item.selection;
        temp.totalDate = sum;
        console.log(23, temp, sum);
        const tempDate = [...date];
        tempDate[0] = temp;

        setDate(tempDate)

    }

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    return (
        <div className="hotelPropertiesComponent">
            {openPopup && (
                <div className="hotelPropertiesPopupImgContainer">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="closePopupBtn"
                        onClick={() => setOpenPopup(false)}
                    />
                    <div className="hotelPropertiesPopupImg">
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrowPopupBtn"
                            onClick={() => handleMove("l")}
                        />
                        <div className="popupImgWrapper">
                            <img src="https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_640.jpg" alt="popupImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrowPopupBtn"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                </div>
            )}
            <div className="hotelPropertiesImg">
                <div className="hotelPropertiesImgLarge">
                    <img
                        onClick={() => handleOpen(0)}
                        src="https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_640.jpg"
                        alt=""
                        className="bigImg"
                    />
                </div>
                <div className="hotelPropertiesImgSmall">
                    <img
                        onClick={() => handleOpen(1)}
                        src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg"
                        alt=""
                        className="smallImg"
                    />
                    <img
                        onClick={() => handleOpen(2)}
                        src="https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_640.jpg"
                        alt=""
                        className="smallImg"
                    />
                    <img
                        onClick={() => handleOpen(3)}
                        src="https://cdn.pixabay.com/photo/2020/03/04/18/02/sacher-4902327_640.jpg"
                        alt=""
                        className="smallImg"
                    />
                    <img
                        onClick={() => handleOpen(4)}
                        src="https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_640.jpg"
                        alt=""
                        className="smallImg"
                    />
                </div>
            </div>
            <div className="hotelProperties">
                <div className="hotelPropertiesContent">
                    <div className="hotelPropertiesTitle">
                        <div className="hotelPropertiesTitleContent">
                            <h3>Stay Cation</h3>
                            <span>100 Ly Thuong Kiet, Da Nang City</span>
                        </div>
                    </div>
                    <div className="hotelPropertiesAmenities">
                        <div className="hotelPropertiesAmenity">
                            <FontAwesomeIcon icon={faBed} className='hotelPropertiesAmenityIcon' />
                            <span>20 Rooms</span>
                        </div>
                        <div className="hotelPropertiesAmenity">
                            <FontAwesomeIcon icon={faBath} className='hotelPropertiesAmenityIcon' />
                            <span>30 Bathrooms</span>
                        </div>
                        <div className="hotelPropertiesAmenity">
                            <FontAwesomeIcon icon={faSquareParking} className='hotelPropertiesAmenityIcon' />
                            <span>10 Parking Slots</span>
                        </div>
                        <div className="hotelPropertiesAmenity">
                            <FontAwesomeIcon icon={faPaw} className='hotelPropertiesAmenityIcon' />
                            <span onClick={() => console.log(date)}>5 Pets Allowed</span>
                        </div>
                    </div>
                    <div className="hotelPropertiesDesc">
                        <h3>Apartment Description</h3>
                        <p>
                            USECASE STATETION P Hotel is a luxurious and conveniently located destination in XYZ city. With modern design, friendly staff, and upscale accommodations, it offers a memorable stay experience. Enjoy comfortable rooms, excellent amenities, and easy access to nearby attractions. Choose XYZ Hotel for an unforgettable trip.
                        </p>
                    </div>
                    <div className="hotelPropertiesMapLocation">
                        <MapContainer center={[16.06827770014092, 108.2009288146462]} zoom={18} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[16.06827770014092, 108.2009288146462]} icon={markerIcon}>
                                <Popup>
                                    The hotel's location.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="hotelPropertiesRoomOptions">
                        <h3>Availability</h3>
                        <div className="hotelPropertiesSearchBarContainer">
                            <div className="hotelPropertiesSearchBar">
                                <div className="hotelPropertiesSearchItem" id="hotelPropertiesSearchCalendar">
                                    <p className='hotelPropertiesSearchItemTitle'>Check in - Check out date</p>
                                    <span onClick={() => { setOpenDate(!openDate); }} className='hotelPropertiesSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                    {openDate &&
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={handleChangeDate}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className='hotelPropertiesDate'
                                            minDate={new Date()}
                                        />}
                                </div>
                                <div className="hotelPropertiesSearchBtn">
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className='hotelPropertiesSearchBtnIcon'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hotelPropertiesRoomsTable">
                            <div className="hotelPropertiesRoomsTableTitle">
                                <div className="hotelPropertiesRoomType">
                                    <span>Category</span>
                                </div>
                                <div className="hotelPropertiesRoomSleeps">
                                    <span>Sleeps</span>
                                </div>
                                <div className="hotelPropertiesRoomQuantity">
                                    <span>Quantity</span>
                                </div>
                                <div className="hotelPropertiesShowPrices">
                                </div>
                            </div>
                            {
                                categories.map((category) => {
                                    return (
                                        <RoomsTable />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hotelPropertiesOfferedAmenities">
                        <h3>Offered Amenities</h3>
                        <div className="offeredAmenities">
                            {
                                amenities.slice(0, 7).map((item, index) => {
                                    return (
                                        <div className="hotelPropertiesItem" key={index}>
                                            <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            {remainingAmenitiesCount > 0 && (
                                <div className="hotelPropertiesItem">
                                    <span>+<b>{remainingAmenitiesCount}</b> more</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hotelPropertiesSafetyHygiene">
                        <h3>Safety and Hygiene</h3>
                        <div className="safetyHygiene">
                            {
                                safetyHygiene.slice(0, 7).map((item, index) => {
                                    return (
                                        <div className="hotelPropertiesItem" key={index}>
                                            <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            {remainingSafetyHygieneCount > 0 && (
                                <div className="hotelPropertiesItem">
                                    <span>+<b>{remainingSafetyHygieneCount}</b> more</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hotelPropertiesReview">
                        <div className="hotelPropertiesReviewTitle">
                            <h3>Reviews</h3>
                            <Rating
                                name="my-rating"
                                value={5}
                                style={{ fontSize: "40px" }}
                                readOnly
                            />
                            <h3>5.0</h3>
                        </div>
                        <div className="hotelPropertiesReviewComment">
                            <ReviewComment />
                            <ReviewComment />
                            <ReviewComment />
                        </div>
                        <div className="hotelPropertiesReviewShowCommentBtnContainer">
                            <div className="hotelPropertiesReviewShowCommentBtn">
                                <span>Show All Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hotelPropertiesReserve">
                    <div className="reserveBox">
                        <div className="reserveBoxPrice">
                            <h3>{`$ 1100 USD`}</h3>
                        </div>
                        <hr className='thin-line' />
                        <div className="reserveBoxPriceDesc">
                            <span>Short Period: $ 1100 USD</span>
                            <span>Medium Period: $ 2200 USD</span>
                            <span>Long Period: $ 3300 USD</span>
                        </div>
                        <div className="reserveBtnComponent">
                            <div className="reserveBtn" onClick={handleScroll}>
                                <span>Reserve Now</span>
                            </div>
                        </div>
                        <div className="reserveBoxFuncs">
                            <div className="reserveBoxFunc">
                                <FontAwesomeIcon icon={faEnvelope} className='reserveBoxIcon' />
                                <span>hotel@gmail.com</span>
                            </div>
                            <div className="reserveBoxFunc">
                                <FontAwesomeIcon icon={faPhone} className='reserveBoxIcon' />
                                <span>0966115723</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HotelProperties;