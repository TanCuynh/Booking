import React, { useEffect, useState } from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import hotelAPI from '../../api/hotelAPI'

const Feature = ({ dataHotel }) => {

    const [isLiked, setIsLiked] = useState(false);

    const [hotelImage, setHotelImage] = useState({});

    const getImageByHotel = async () => {
        const res = await hotelAPI.getImageByHotel(dataHotel?.id);
        if (res.status === 200) {
            console.log("getImageByHotel", res.data.data[0]);
            setHotelImage(res.data.data[0]);
        }
        else {
            setHotelImage({});
            console.log("Error");
        }
    }
    useEffect(() => {
        getImageByHotel(dataHotel?.id);
    },[])

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="feature">
            <Link to={`/hotel/${dataHotel?.id}`}>
                <div className="featureImg">
                    <img src={hotelImage.image_url} alt="" />
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