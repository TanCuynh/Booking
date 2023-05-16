import React from 'react'
import './roomDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCheck, faDoorOpen, faMountainSun, faShower, faVolumeXmark, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import Slideshow from '../slideshow/Slideshow'

const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/213244036.jpg?k=4d029a6a277dda491d6c94398932e9f7ece6e3c76fa5062131ca354c4ca8edc2&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418397.jpg?k=41d6819de7f349f0ee02538d5a1a038259156dccaefd22d5fb1c7a994339335f&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417991.jpg?k=78d702994684868968bae67a1b5a853253b787c085e66cad5046a38bf13a0bfc&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417930.jpg?k=ee526dbfec57be575b9bc6672fd47162da4a8a7ce9ba1e9b30822197c00d1dde&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/409417240.jpg?k=a9c9e129b69144eaa5dc9ad01dc9de503ee1582d472a33191c8679622ab55ef0&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/373917970.jpg?k=e9ca04d3911f6ff3dc37e1a157b2baa9fefd9871c0f9ec905cbac61809c8bca8&o=&hp=1",
];

const RoomDetail = () => {
    return (
        <div className="roomDetailContainer">
            <div className="roomDetailDesc">
                <div className="roomDetailImgContainer">
                <Slideshow images={images} />
                   
                </div>
                <div className="roomDetailContentContainer">
                    <h3 className='roomDetailName'>Small Double Room</h3>
                    <div className="roomDetailAmenities">
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <span>Room</span>
                        </div>
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faMountainSun} />
                            <span>View of the courtyard</span>
                        </div>
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faSnowflake} />
                            <span>Air conditioner</span>
                        </div>
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faShower} />
                            <span>Private bathroom in the room</span>
                        </div>
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faVolumeXmark} />
                            <span>Soundproofing system</span>
                        </div>
                        <div className="roomDetailAmenity">
                            <FontAwesomeIcon icon={faWifi} />
                            <span>Free Wi-Fi</span>
                        </div>
                    </div>
                    <div className="roomDetailBedType">
                        <span>1 double bed</span>
                        <FontAwesomeIcon icon={faBed} />
                    </div>
                    <div className="roomDetailDescContent">
                        <span>In your private bathroom:</span>
                        <div className="roomDetailDescContentContainer">
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Toilet</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Hairdryer</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Bathtub or Shower</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Towel</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Toilet paper</span>
                            </div>
                        </div>
                    </div>
                    <div className="roomDetailDescContent">
                        <span>Direction of vision:</span>
                        <div className="roomDetailDescContentContainer">
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>View of the courtyard</span>
                            </div>
                        </div>
                    </div>
                    <div className="roomDetailDescContent">
                        <span>Room amenities:</span>
                        <div className="roomDetailDescContentContainer">
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Upper floors go up by elevator</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Heating system</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Bed spread</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Cleaning products</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Air conditioner</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Desk</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Does not cause allergies</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Electrical outlet near the bed</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Soundproofing system</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>Clothes hanger</span>
                            </div>
                            <div className="roomDetailDescContentItem">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>There are rooms connenting through the connecting doors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomDetailBookingContainer">
                <div className="roomDetailPriceContainer">
                    <div className="roomDetailPriceDesc">
                        <div className="roomDetailPriceDescTitle">
                            <h3>Small Double Room</h3>
                        </div>
                        <div className="roomDetailPriceDescContent">
                            <span>1 double bed</span>
                            <FontAwesomeIcon icon={faBed} />
                        </div>
                    </div>
                    <div className="roomDetailPrice">
                        <span>$ 2000 USD for 2 nights</span>
                    </div>
                </div>
                <div className="roomDetailBookingBtnContainer">
                    <div className="roomDetailBookingBtn">
                        <span>Book now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetail