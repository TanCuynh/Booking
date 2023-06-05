import React from 'react'
import './featuredProperties.css'
import FeaturedProperty from "../featuredProperty/FeaturedProperty";

const FeaturedProperties = () => {
    return (
        <div className="featuredProperties">
            <div className="featuredPropertiesTitle"><h1>Most Booked Properties on our Listing</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="featuredPropertiesItem">
                <FeaturedProperty />
                <FeaturedProperty />
                <FeaturedProperty />
                <FeaturedProperty />
                <FeaturedProperty />
                <FeaturedProperty />
            </div>
        </div>
    )
}

export default FeaturedProperties