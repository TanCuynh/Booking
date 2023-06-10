import React, { useState } from 'react'
import './searchedProperty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faCar, faHeart as solidHeart, faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SearchedProperty = ({ data }) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="searchedProperty">
            <div className="searchedPropertyImg">
                <Link to={`/hotel/${data?.id}`}>
                    {
                        data?.hotel_image[0] &&
                        <img
                            src={data.hotel_image[0].image_url}
                            alt="searchedProp"
                        />
                    }
                </Link>
                <div className={`searchedWishlistIcon ${isLiked ? 'active' : ''}`}>
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : heart}
                        onClick={handleToggleLike}
                    />
                </div>
                <span>${data?.price} USD</span>
            </div>
            <div className="searchedPropertyDesc">
                <h3 className="searchedPropertyName">
                    <Link to={`/hotel/${data?.id}`}>{data?.name}</Link>
                </h3>
                <span className="searchedPropertyAddress">
                    {
                        data?.address
                    }
                </span>
                <div className="searchedPropertyAmenities">
                    <div className="searchedPropertyAmenity">
                        <FontAwesomeIcon icon={faBed} />
                        <span>{data?.room_total}</span>
                    </div>
                    <div className="searchedPropertyAmenity">
                        <FontAwesomeIcon icon={faBath} />
                        <span>{data?.bathrooms}</span>
                    </div>
                    <div className="searchedPropertyAmenity">
                        <FontAwesomeIcon icon={faCar} />
                        <span>{data?.parking_slot}</span>
                    </div>
                    <div className="searchedPropertyAmenity">
                        <FontAwesomeIcon icon={faPaw} />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchedProperty