import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import UserReview from "../../../components/userReview/UserReview";
import AllReviewsUser from '../../../components/allReviewsUser/AllReviewsUser'
import "./profile.css";

const Profile = () => {
    const [showReviews, setShowReviews] = useState(false);

    const openPopup = () => {
        setShowReviews(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setShowReviews(false);
        document.body.style.overflow = 'auto';
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user/myprofile');
    }
    return (
        <div>

            <div className="main-layoutt">
                <div className="verify-layout">
                    <div className="avatar">
                        <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/273163403_1119529748849359_6980097327525230278_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oKc1wENFVegAX-JPV-M&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCTNGYbgo0hex-yUAWzYJUm2FlSNHmN09E3dpDJNWe2Vg&oe=64777543"
                            alt="avatar"
                            className="imagee"
                        />
                    </div>

                    <div className="hostAccountVerify">
                        <h3>Identity Verification</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>

                    <div className="confirmed-container">
                        <p className="name-confirmed">Trần Hồng Đức</p>
                        <div className="hostAccountVerifyConfirm">
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Email Confirm</span>
                        </div>
                        <div className="hostAccountVerifyConfirm">
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Email Confirm</span>
                        </div>
                    </div>
                </div>

                <div className="profile-layout">
                    <div className="profile-container">
                        <p className="hello-text">Hello, Trần Hồng Đức</p>
                        <p className="time-join">Joined in 2023</p>
                        <button className="btn-edit-profile" onClick={handleClick}>
                            My Profile
                        </button>
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