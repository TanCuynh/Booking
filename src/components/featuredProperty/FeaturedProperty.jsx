import React from 'react'
import './featuredProperty.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faCar, faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const FeaturedProperty = () => {
    return (
        <div className="featuredProperty">
            <div className="featuredPropertyImg">
                <img
                    src="https://media.moddb.com/images/downloads/1/12/11394/gallery150.jpg"
                    alt="prop"
                />
                <div className="featuredWishlistIcon">
                    <FontAwesomeIcon icon={faHeart} />
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