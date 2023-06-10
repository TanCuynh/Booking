import React, { useEffect, useState } from "react";
import { Rating } from '@mui/material'
import './userReview.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserReview(dataReview) {

    console.log("one review", dataReview);
    const [formattedCreatedAt, setFormattedCreatedAt] = useState('');

    useEffect(() => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return formattedDate;
        };

        setFormattedCreatedAt(formatDate(dataReview?.dataReview.created_at));
    }, [dataReview?.dataReview.created_at])

    return (
        <div className="user-review">
            <div className="hotel">
                <div className="hotelIntroContainer">
                    <div className="avt">
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="hotelContent">
                        <p className="userReviewHotelName">{dataReview?.dataReview.hotel}</p>
                        <p className="address-hotel">{dataReview?.dataReview.hotel_address}</p>
                        <div className="day-review">
                            <p>{formattedCreatedAt}</p>
                        </div>
                    </div>
                </div>
                <Rating
                    name="my-rating"
                    value={dataReview?.dataReview.rating}
                    readOnly
                    precision={0.5}
                />
            </div>

            <div className="reviewContainer">
                <div className="reviewsText">
                    <p>{dataReview?.dataReview.content}</p>
                </div>
            </div>
        </div>
    );
}

export default UserReview;