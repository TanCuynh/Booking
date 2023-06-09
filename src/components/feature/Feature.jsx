import React, { useEffect, useState } from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import hotelAPI from '../../api/hotelAPI'

const Feature = ({ dataHotel }) => {

    const [isLiked, setIsLiked] = useState(false);

    const [hotelImage, setHotelImage] = useState({});

    const getImageByHotel = async () => {
        const res = await hotelAPI.getImageByHotel(dataHotel?.id);
        if (res.status === 200) {
            setHotelImage(res.data.data[0]);
        }
        else {
            setHotelImage({});
            console.log("Error");
        }
    }

    useEffect(() => {
        getImageByHotel(dataHotel?.id);
    }, [])

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
            <div className="featureHotelState">
                <div className="ratingStars">
                    <Rating
                        name="my-rating"
                        value={dataHotel?.rating}
                        precision={0.5}
                        readOnly
                        style={{ color: '#FDC32D' }}
                        emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                </div>
                <div className={`wishlistIcon ${isLiked ? 'active' : ''}`}>
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : heart}
                        onClick={handleToggleLike}
                    />
                </div>
            </div>
            <div className="featureHotelInfo">
                <div className="featureHotelName">
                    <Link to={`/hotel/${dataHotel?.id}`}>
                        <span>{dataHotel?.name}</span>
                    </Link>
                </div>
                <div className="featureHotelAddress">
                    <span>{dataHotel?.address}</span>
                </div>
            </div>
        </div>
    )
}

export default Feature