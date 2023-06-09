import React from "react";
import { Rating } from '@mui/material'
import './userReview.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserReview() {
    return (
        <div className="user-review">
            <div className="hotel">
                <div className="hotelIntroContainer">
                    <div className="avt">
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="hotelContent">
                        <p className="userReviewHotelName">Wink Hotel</p>
                        <p className="address-hotel">Da Nang, Viet Nam</p>
                        <div className="day-review">
                            <p>24 May 2023</p>
                        </div>
                    </div>
                </div>
                <Rating
                    name="my-rating"
                    value={5}
                    readOnly
                />
            </div>

            <div className="reviewContainer">
                <div className="reviewsText">
                    <p>Chất lượng phục vụ cuc ki` tot, nhu sua me tu` nguon chay ra, cong cha nhu nui thai son, long` me bao la nhu bien Thai Binh</p>
                </div>
            </div>
        </div>
    );
}

export default UserReview;