import React from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Feature = () => {
    return (
        <div className="feature">
            <div className="wishlistIcon">
            <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="featureHotelInfo">
                <div className="featureHotelName">
                    <span className="hotelName">LA Supreme Hotel</span>
                </div>
                <div className="featureHotelAddress">
                    <span className="address">1020 Super Bowl</span>
                </div>
            </div>
        </div>
    )
}

export default Feature