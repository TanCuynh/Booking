import React, { useState } from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

const Feature = () => {

    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="feature">
            <div className="ratingStars">
                <Rating
                    name="my-rating"
                    value={5}
                    readOnly
                    style={{color: 'white'}}
                />
            </div>
            <div className={`wishlistIcon ${isLiked ? 'active' : ''}`}>
                <FontAwesomeIcon
                    icon={isLiked ? solidHeart : heart}
                    onClick={handleToggleLike}
                />
            </div>
            <div className="featureHotelInfo">
                <div className="featureHotelName">
                    <span className="hotelName"><Link to="/search/asd">LA Supreme Hotel</Link></span>
                </div>
                <div className="featureHotelAddress">
                    <span className="address">1020 Super Bowl</span>
                </div>
            </div>
        </div>
    )
}

export default Feature