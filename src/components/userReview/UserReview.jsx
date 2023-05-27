import React from "react";
import './userReview.css';

function UserReview () {
    return (
        <div className="user-review">
            <div className="hotel">
                <div className="avt">
                    <p>H</p>
                </div>

                <div className="name-Hotel">
                    <p className="namee">Wink Hotel</p>
                    <p className="address-hotel">Da Nang, Viet Nam</p>
                </div>
            </div>

            <div className="review-container">
                <div className="day-review">
                    <p>24 May 2023</p>
                </div>

                <div className="reviews-text">   
                    <p>Chất lượng phục vụ tốt</p>
                </div>
            </div>
        </div>
    );
}

export default UserReview;