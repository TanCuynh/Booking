import React, { useEffect, useMemo, useState } from 'react'
import './hotelDetail.css'
import { RoomsTable } from '../../components'
import ReviewComment from '../../components/reviewComment/ReviewComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMagnifyingGlass, faPaw, faPhone, faStar, faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faHeart as solidHeart, faSquareParking, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faHeart as heart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { LinearProgress } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import hotelAPI from '../../api/hotelAPI'



const markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const HotelDetail = () => {
    const [dataHotel, setDataHotel] = useState({});
    const [safetyHygiene, setSafetyHygiene] = useState([]);
    const [amenities, setAmenities] = useState([]);

    const { id } = useParams();

    const getHotelDetail = async (id) => {
        const res = await hotelAPI.getHotelById(id);
        if (res.status === 200) {
            setDataHotel(res.data.data);
            setSafetyHygiene(res.data.data.Safety_Hygiene.split(" \n"));
            setAmenities(res.data.data.amenities.split(","));

        } else {
            setDataHotel({});
            console.log('err');
        }
    }

    const remainingSafetyHygieneCount = safetyHygiene.length - 7;
    const remainingAmenitiesCount = amenities.length - 7;

    const [isLiked, setIsLiked] = useState(false);
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

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
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
    const renderSmallImgs = useMemo(() => {
        if (dataHotel?.images) {
            // console.log("siuuuuu", dataHotel?.images)
            const temp = [...dataHotel.images];
            return temp.slice(1).map((image, index) => {
                return (
                        <img key={index} onClick={() => handleOpen(index + 1)} src={image.image_url} alt="" className="smallImg" />
                )
            })
        }
    }, [dataHotel?.images])

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
                            <img src={dataHotel?.images[slideIndex].image_url} alt="popupImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrowPopupBtn' onClick={() => handleMove("r")} />
                    </div>
                </div>
            }
            <div className="hotelDetailImg">
                {
                    dataHotel?.images &&
                    <div className="hotelDetailImgLarge">
                        <img onClick={() => handleOpen(0)} src={dataHotel?.images[0].image_url} alt="" className="bigImg" />
                    </div>
                }
                <div className="hotelDetailImgSmall">
                    {
                        renderSmallImgs
                    }
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
                            <span onClick={() => console.log(date)}>0 Pets Allowed</span>
                        </div>
                    </div>
                    <div className="hotelDetailDesc">
                        <h3>Apartment Description</h3>
                        <p>
                            {
                                dataHotel?.description ? dataHotel.description : ''
                            }
                        </p>
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
                        </MapContainer>
                    </div>
                    <div className="hotelDetailRoomOptions">
                        <h3>Availability</h3>
                        <div className="hotelDetailSearchBarContainer">
                            <div className="hotelDetailSearchBar">
                                <div className="hotelDetailSearchItem" id="hotelDetailSearchCalendar">
                                    <p className='hotelDetailSearchItemTitle'>Check in - Check out date</p>
                                    <span onClick={() => { setOpenDate(!openDate); }} className='hotelDetailSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                    {openDate &&
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={handleChangeDate}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className='hotelDetailDate'
                                            minDate={new Date()}
                                        />}
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
                                amenities.slice(0, 7).map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem" key={index}>
                                            <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            {remainingAmenitiesCount > 0 && (
                                <div className="hotelDetailItem">
                                    <span>+<b>{remainingAmenitiesCount}</b> more</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hotelDetailSafetyHygiene">
                        <h3>Safety and Hygiene</h3>
                        <div className="safetyHygiene">
                            {
                                safetyHygiene.slice(0, 7).map((item, index) => {
                                    return (
                                        <div className="hotelDetailItem" key={index}>
                                            <FontAwesomeIcon icon={faCircleCheck} className='offeredAmenityIcon' />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            {remainingSafetyHygieneCount > 0 && (
                                <div className="hotelDetailItem">
                                    <span>+<b>{remainingSafetyHygieneCount}</b> more</span>
                                </div>
                            )}
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