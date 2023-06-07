import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import UserReview from "../../../components/userReview/UserReview";
import AllReviewsUser from '../../../components/allReviewsUser/AllReviewsUser'
import "./profile.css";

const Profile = () => {
    const navigate = useNavigate();

    const [showReviews, setShowReviews] = useState(false);

    const openPopup = () => {
        setShowReviews(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setShowReviews(false);
        document.body.style.overflow = 'auto';
    };

    const handleClick = () => {
        navigate('/user/myprofile');
    }

    return (
        <div>
            <div className="main-layoutt">
                <div className="profile-layout">
                    <div className="profileLayoutContainer">
                        <div className="avatar">
                            <img src="https://i.ytimg.com/vi/2X7t4ytR3tU/maxresdefault.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className="profile-container">
                            <p className="hello-text">Hello, Trần Hồng Đức</p>
                            <p className="time-join">Joined in 11/9/2023</p>

                            <button
                                className="btn-edit-profile"
                                onClick={handleClick}
                            >My Profile</button>
                        </div>
                    </div>

                    <div class="horizontal-vector"></div>

                    <div className="review-container">
                        <h3>Your reviews</h3>
                        {showReviews &&
                            <div className="all-reviews-modal-layout" onClick={closePopup}>
                                <div className="all-reviews-modal" onClick={(e) => e.stopPropagation()}>
                                    <AllReviewsUser onClose={closePopup} />
                                </div>
                            </div>
                        }
                        <UserReview />
                        <UserReview />
                        <div className="profileShowAllReviewsBtn" onClick={openPopup}>
                            <span>Show all reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;