import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './wishlistHotel.css'

const WishlistHotel = () => {
    return (
        <div className="wishlistHotelContainer">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/297693925.jpg?k=c5cfc34421f30c8fb83452c7a9be6b0741e55bcbcc02b4e5c61fa500b99b8f80&o=&hp=1" alt="wishlistHotel" />
            <div className="wishlistHotelInfo">
                <h1 className='wishlistHotelName'>Family Apartment</h1>
                <span className='wishlistHotelAddress'>100 Smart Street, LA, USA</span>
            </div>
            <FontAwesomeIcon className='wishlistHotelDeleteBtn' icon={faXmark} />
        </div>
    )
}

export default WishlistHotel