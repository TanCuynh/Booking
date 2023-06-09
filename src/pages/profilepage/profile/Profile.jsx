import React, { useContext } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserReview from "../../../components/userReview/UserReview";
import AllReviewsUser from '../../../components/allReviewsUser/AllReviewsUser'
import "./profile.css";
import { APP_CONTEXT } from "../../../App";

const Profile = () => {
    const navigate = useNavigate();
    const context = useContext(APP_CONTEXT);

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
    const [showAvatar, setAvatar] = useState(false);
    const openPopupAvt = () => {
        setAvatar(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopupAvt = () => {
        setAvatar(false);
        document.body.style.overflow = 'auto';
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Xử lý file hình ảnh ở đây
        console.log('Đã chọn file:', file);
    };

    const chooseaphoto = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', handleFileUpload);
        fileInput.click();
    };

    return (
        <div>
            <div className="main-layoutt">
                <div className="profile-layout">
                    <div className="profileLayoutContainer">
                        <div className="avatar">
                            {showAvatar &&
                                <div className="account-img-modal-layout" onClick={closePopupAvt}>
                                    <div className="account-img-modal" onClick={(e) => e.stopPropagation()}>
                                        <div className='AccountImg'>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="AccountAvt" onClick={openPopupAvt}>
                            </div>
                            <div className="AccountChangeImg">
                                <span onClick={chooseaphoto}>Upload Photo</span>
                            </div>
                        </div>
                        <div className="profile-container">
                            <p className="hello-text">Hello, {context.user.name}</p>

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