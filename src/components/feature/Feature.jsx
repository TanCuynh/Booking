import React, { useState } from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

const Feature = ({ dataHotel }) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="feature">
            <Link to={`/hotel/${dataHotel?.id}`}>
                <div className="featureImg">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/297693925.jpg?k=c5cfc34421f30c8fb83452c7a9be6b0741e55bcbcc02b4e5c61fa500b99b8f80&o=&hp=1" alt="" />
                </div>
            </Link>
            <div className="ratingStars">
                <Rating
                    name="my-rating"
                    value={5}
                    readOnly
                    style={{ color: 'white' }}
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
                    <span className="hotelName"><Link to={`/hotel/${dataHotel?.id}`}>{dataHotel?.name}</Link></span>
                </div>
                <div className="featureHotelAddress">
                    <span className="address">{dataHotel?.address}</span>
                </div>
            </div>
        </div>
    )
}

export default Feature