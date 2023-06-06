import React, { useState } from 'react'
import './featuredProperty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faCar, faHeart as solidHeart, faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const FeaturedProperty = ({ dataHotel }) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="featuredProperty">
            <div className="featuredPropertyImg">
                <Link to={`/hotel/${dataHotel?.id}`}>
                    <img
                        className='imgContainer'
                        src={dataHotel?.hotel_image[0].image_url}
                        alt="prop"
                    />
                </Link>
                <div className={`featuredWishlistIcon ${isLiked ? 'active' : ''}`}>
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : heart}
                        onClick={handleToggleLike}
                    />
                </div>
                <span className='featuredPropertyPrice'>$ {dataHotel?.price} USD</span>
            </div>
            <div className="featuredPropertyDesc">
                <Link to={`/hotel/${dataHotel?.id}`}>
                    <h3>{dataHotel?.name}</h3>
                </Link>
                <span>{dataHotel?.address}</span>
                <div className="featuredPropertyAmenities">
                    <FontAwesomeIcon icon={faBed} />
                    <span>{dataHotel?.room_total}</span>
                    <FontAwesomeIcon icon={faBath} />
                    <span>{dataHotel?.bathrooms}</span>
                    <FontAwesomeIcon icon={faCar} />
                    <span>{dataHotel?.parking_slot}</span>
                    <FontAwesomeIcon icon={faPaw} />
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperty