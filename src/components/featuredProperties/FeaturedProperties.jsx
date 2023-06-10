import React, { useEffect, useState } from 'react'
import './featuredProperties.css'
import FeaturedProperty from "../featuredProperty/FeaturedProperty";
import hotelAPI from '../../api/hotelAPI';

const FeaturedProperties = () => {

    const [dataMostBookedHotel, setDataMostBookedHotel] = useState([]);

    const getDataMostBookedHotel = async () => {
        const res = await hotelAPI.getMostBookedHotel();
        if (res.status === 200) {
            // console.log("getMostBookedHotel", res.data.data);
            setDataMostBookedHotel(res.data.data);
        } else {
            setDataMostBookedHotel([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getDataMostBookedHotel();
    }, [])
    return (
        <div className="featuredProperties">
            <div className="featuredPropertiesTitle"><h1>Most Booked Hotels on our Listing</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="featuredPropertiesItem">
                {
                    dataMostBookedHotel.map((hotel) => {
                        return (
                            <FeaturedProperty
                                key={hotel?.id}
                                dataHotel={hotel}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProperties