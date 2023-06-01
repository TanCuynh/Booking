import React, { useEffect, useRef, useState } from 'react'
import './hotelDetail.css'
import { RoomsTable } from '../../components'
import ReviewComment from '../../components/reviewComment/ReviewComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faBuilding, faCar, faGamepad, faMagnifyingGlass, faPaw, faPhone, faSnowflake, faStar, faTv, faUtensils, faWifi, faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faHeart as solidHeart, faSquareParking, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faHeart as heart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { LinearProgress } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { useNavigate, useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { async } from 'q'
import hotelAPI from '../../api/hotelAPI'



const markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
const photos = [
    {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/213244036.jpg?k=4d029a6a277dda491d6c94398932e9f7ece6e3c76fa5062131ca354c4ca8edc2&o=&hp=1',
    },
    {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418397.jpg?k=41d6819de7f349f0ee02538d5a1a038259156dccaefd22d5fb1c7a994339335f&o=&hp=1',
    },
    {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418368.jpg?k=579dbcfeac8598858a58d4e529aa9b81a0b58873433ff364716ec45d3b228673&o=&hp=1',
    },
    {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418275.jpg?k=91693ba2206542fa332133eb5d2cb1ec096f2b91c0c14b747cc35c9b8186de11&o=&hp=1',
    },
    {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418256.jpg?k=2658b42e78a63e74689ac5234e05cba716cf39be71dc152642c5756a4e7a4f78&o=&hp=1',
    },
];


const HotelDetail = () => {
    const [dataHotel, setDataHotel] = useState({});
    const [safetyHygiene, setSafetyHygiene] = useState([]);
    const [amenities, setAmenities] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    console.log('id', id);

    const getHotelDetail = async (id) => {
        const res = await hotelAPI.getHotelById(id);
        if (res.status === 200) {
            console.log('data', res.data.data);
            setDataHotel(res.data.data);
            setSafetyHygiene(res.data.data.Safety_Hygiene.split(" \n"));
            setAmenities(res.data.data.amenities.split(","));
            console.log("array", res.data.data.amenities.split(","));

        } else {
            setDataHotel({});
            console.log('err');
        }
    }

    const [isLiked, setIsLiked] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [value, setValue] = React.useState(100);


    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    };



    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        console.log(`Clicked at: ${lat}, ${lng}`);
    };

    const MapClickHandler = () => {
        const map = useMapEvents({
            click: handleMapClick,
        });
        return null;
    };

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
    };



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
        const targetElement = document.querySelector('.hotelDetailRoomOptions');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getHotelDetail(id);
    }, []);

    return (
        <div className="hotelDetailComponent">
            {openPopup &&
                <div className="hotelDetailPopupImgContainer">
                    <div className="hotelDetailPopupImg">
                        <FontAwesomeIcon icon={faCircleXmark} className='closePopupBtn' onClick={() => setOpenPopup(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrowPopupBtn' onClick={() => handleMove("l")} />
                        <div className="popupImgWrapper">
                            <img src={photos[slideIndex].src} alt="popupImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrowPopupBtn' onClick={() => handleMove("r")} />
                    </div>
                </div>
            }
            <div className="hotelDetailImg">
                <div className="hotelDetailImgLarge">
                    <img onClick={() => handleOpen(0)} src={photos[0].src} alt="" className="bigImg" />
                </div>
                <div className="hotelDetailImgSmall">
                    {photos.slice(1).map((photo, i) => (
                        <img key={i} onClick={() => handleOpen(i + 1)} src={photo.src} alt="" className="smallImg" />
                    ))}
                </div>
            </div>
            <div className="hotelDetail">
                <div className="hotelDetailContent">
                    <div className="hotelDetailTitle">
                        <div className="hotelDetailTitleContent">
                            <h3>{dataHotel?.name}</h3>
                            <span>{dataHotel?.address}</span>
                        </div>
                        <div className="hotelDetailAction">
                            <FontAwesomeIcon
                                className={`hotelDetailHeartIcon ${isLiked ? 'active' : ''}`}
                                icon={isLiked ? solidHeart : heart}
                                onClick={handleToggleLike}
                            />
                            <FontAwesomeIcon icon={faShareFromSquare} />
                        </div>
                    </div>
                    <div className="hotelDetailAmenities">
                        <div className="hotelDetailAmenity">
                            <FontAwesomeIcon icon={faBed} className='hotelDetailAmenityIcon' />
                            <span>{dataHotel?.room_total} Rooms</span>
                        </div>
                        <div className="hotelDetailAmenity">
                            <FontAwesomeIcon icon={faBath} className='hotelDetailAmenityIcon' />
                            <span>{dataHotel?.bathrooms} Bathrooms</span>
                        </div>
                        <div className="hotelDetailAmenity">
                            <FontAwesomeIcon icon={faSquareParking} className='hotelDetailAmenityIcon' />
                            <span>{dataHotel?.parking_slot} Parking Slots</span>
                        </div>
                        <div className="hotelDetailAmenity">
                            <FontAwesomeIcon icon={faPaw} className='hotelDetailAmenityIcon' />
                            <span>0 Pets Allowed</span>
                        </div>
                    </div>
                    <div className="hotelDetailDesc">
                        <h3>Apartment Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="hotelDetailMapLocation">
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
                            {/* <MapClickHandler /> */}
                        </MapContainer>
                    </div>
                    <div className="hotelDetailRoomOptions">
                        <h3>Availability</h3>
                        <div className="hotelDetailSearchBarContainer">
                            <div className="hotelDetailSearchBar">
                                <div className="hotelDetailSearchItem" id="hotelDetailSearchCalendar">
                                    <p className='hotelDetailSearchItemTitle'>Check in - Check out date</p>
                                    <span onClick={() => setOpenDate(!openDate)} className='hotelDetailSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                    {openDate &&
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className='hotelDetailDate'
                                            minDate={new Date()}
                                        />}
                                </div>
                                <div className="hotelDetailSearchItem">
                                    <p className='hotelDetailSearchItemTitle'>Guests</p>
                                    <span onClick={() => setOpenOptions(!openOptions)} className='hotelDetailSearchText'>{`${options.adult} adults · ${options.children} children · ${options.room} rooms`}</span>
                                    {openOptions &&
                                        <div className="hotelDetailOptions">
                                            <div className="optionItem">
                                                <span className="optionText">Adults</span>
                                                <div className="optionCounter">
                                                    <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                                                    <span className="optionCounterNumber">{options.adult}</span>
                                                    <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Children</span>
                                                <div className="optionCounter">
                                                    <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                                                    <span className="optionCounterNumber">{options.children}</span>
                                                    <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Rooms</span>
                                                <div className="optionCounter">
                                                    <button disabled={options.room <= 1} className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                                    <span className="optionCounterNumber">{options.room}</span>
                                                    <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="hotelDetailSearchBtn">
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className='hotelDetailSearchBtnIcon'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hotelDetailRoomsTable">
                            <div className="hotelDetailRoomsTableTitle">
                                <div className="hotelDetailRoomType">
                                    <span>Category</span>
                                </div>
                                <div className="hotelDetailRoomSleeps">
                                    <span>Sleeps</span>
                                </div>
                                <div className="hotelDetailRoomQuantity">
                                    <span>Quantity</span>
                                </div>
                                <div className="hotelDetailShowPrices">
                                </div>
                            </div>
                            <RoomsTable />
                            <RoomsTable />
                            <RoomsTable />
                            <RoomsTable />
                        </div>
                    </div>
                    <div className="hotelDetailOfferedAmenities">
                        <h3>Offered Amenities</h3>
                        <div className="offeredAmenities">
                            {
                                
                            }
                            <div className="hotelDetailItem">
                                <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                <span>{dataHotel?.amenities}</span>
                            </div>
                            {/* <div className="hotelDetailItem">
                                <FontAwesomeIcon icon={ faCircleCheck } className='offeredAmenityIcon' />
                                <span>Television</span>
                            </div>
                            <div className="hotelDetailItem">
                                <FontAwesomeIcon icon={ faCircleCheck } className='offeredAmenityIcon' />
                                <span>Air conditioner</span>
                            </div>
                            <div className="hotelDetailItem">
                                <FontAwesomeIcon icon={ faCircleCheck } className='offeredAmenityIcon' />
                                <span>Free Wifi</span>
                            </div>
                            <div className="hotelDetailItem">
                                <FontAwesomeIcon icon={ faCircleCheck } className='offeredAmenityIcon' />
                                <span>Console Games</span>
                            </div>
                            <div className="hotelDetailItem">
                                <span> <b>+5</b> more amenities</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="hotelDetailSafetyHygiene">
                        <h3>Safety and Hygiene</h3>
                        <div className="safetyHygiene">
                            {
                                safetyHygiene.map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem">
                                            <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hotelDetailReview">
                        <div className="hotelDetailReviewTitle">
                            <h3>Reviews</h3>
                            <FontAwesomeIcon icon={faStar} className='hotelDetailReviewTitleIcon' />
                            <h3>5.0</h3>
                        </div>
                        <div className="hotelDetailReviewRate">
                            <div className="hotelDetailReviewRateItem">
                                <span>Amenity</span>
                                <LinearProgress variant="determinate" value={value} />
                                <span className='ratingCount'>5.0</span>
                            </div>
                            <div className="hotelDetailReviewRateItem">
                                <span>Hygiene</span>
                                <LinearProgress variant="determinate" value={value} />
                                <span className='ratingCount'>5.0</span>
                            </div>
                            <div className="hotelDetailReviewRateItem">
                                <span>Communication</span>
                                <LinearProgress variant="determinate" value={value} />
                                <span className='ratingCount'>5.0</span>
                            </div>
                            <div className="hotelDetailReviewRateItem">
                                <span>Location of Property</span>
                                <LinearProgress variant="determinate" value={value} />
                                <span className='ratingCount'>5.0</span>
                            </div>
                            <div className="hotelDetailReviewRateItem">
                                <span>Value for Money</span>
                                <LinearProgress variant="determinate" value={value} />
                                <span className='ratingCount'>5.0</span>
                            </div>
                        </div>
                        <div className="hotelDetailReviewComment">
                            <ReviewComment />
                            <ReviewComment />
                            <ReviewComment />
                        </div>
                        <div className="hotelDetailReviewShowCommentBtnContainer">
                            <div className="hotelDetailReviewShowCommentBtn">
                                <span>Show All Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hotelDetailReserve">
                    <div className="reserveBox">
                        <div className="reserveBoxPrice">
                            <h3>{`$ ${dataHotel?.price} USD`}</h3>
                        </div>
                        <hr className='thin-line' />
                        <div className="reserveBoxPriceDesc">
                            <span>Short Period: $ {dataHotel?.price} USD</span>
                            <span>Medium Period: $ {dataHotel?.price * 2} USD</span>
                            <span>Long Period: $ {dataHotel?.price * 3} USD</span>
                        </div>
                        <div className="reserveBtnComponent">
                            <div className="reserveBtn" onClick={handleScroll}>
                                <span>Reserve Now</span>
                            </div>
                        </div>
                        <div className="reserveBoxFuncs">
                            <div className="reserveBoxFunc">
                                <FontAwesomeIcon icon={faEnvelope} className='reserveBoxIcon' />
                                <span>{dataHotel?.email}</span>
                            </div>
                            <div className="reserveBoxFunc">
                                <FontAwesomeIcon icon={faPhone} className='reserveBoxIcon' />
                                <span>{dataHotel?.hotline}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail