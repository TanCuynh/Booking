import React from 'react'
import './wishlist.css'
import WishlistHotel from '../../components/wishlistHotel/WishlistHotel'

const Wishlist = () => {
    return (
        <div className="wishlistContainer">
            <div className="wishlistTitle">
                <h1>Wishlists</h1>
            </div>
            <div className="wishlistItemsContainer">
                <WishlistHotel />
                <WishlistHotel />
                <WishlistHotel />
                <WishlistHotel />
                <WishlistHotel />
                <WishlistHotel />
            </div>
        </div>
    )
}

export default Wishlist