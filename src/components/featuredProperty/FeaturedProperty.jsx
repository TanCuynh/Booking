import React from 'react'
import './featuredProperty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faCar, faPaw } from '@fortawesome/free-solid-svg-icons'

const FeaturedProperty = () => {
    return (
        <div className="featuredProperty">
            <div className="featuredPropertyImg">
                <div className="featuredWishlistIcon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>$1000-3000 USD</span>
            </div>
            <div className="featuredPropertyDesc">
                <h3>Maddog's Apartment</h3>
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