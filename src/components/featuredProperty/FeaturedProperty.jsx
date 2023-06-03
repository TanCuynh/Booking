import React, { useState } from 'react'
import './featuredProperty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faCar, faHeart as solidHeart, faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const FeaturedProperty = () => {

    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className="featuredProperty">
            <div className="featuredPropertyImg">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/164870768.jpg?k=30c92fd45582c990b9e64427cd7f8feb4f3485ff6688a6df0da4f9a1963a8902&o=&hp=1"
                    alt="prop"
                />
                <div className={`featuredWishlistIcon ${isLiked ? 'active' : ''}`}>
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : heart}
                        onClick={handleToggleLike}
                    />
                </div>
                <span className='featuredPropertyPrice'>$1000-3000 USD</span>
            </div>
            <div className="featuredPropertyDesc">
                <h3><Link to="/unknown_hotel">Supreme's Apartment</Link></h3>
                <span>100 Grove Street, Los Santos, USA</span>
                <div className="featuredPropertyAmenities">
                    <FontAwesomeIcon icon={faBed} />
                    <span>2</span>
                    <FontAwesomeIcon icon={faBath} />
                    <span>2</span>
                    <FontAwesomeIcon icon={faCar} />
                    <span>2</span>
                    <FontAwesomeIcon icon={faPaw} />
                    <span>2</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperty