import React, { useState } from "react";
import UserReview from "../userReview/UserReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box, Rating, TextField } from '@mui/material';
import './allReviewsUser.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AllReviewsUser = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    return (
        <div>
            <div className="all-reviews-layout">
                <div className="allReviewsUser">
                    <p>All of your reviews</p>
                </div>

                <div class="horizontalVector"></div>

                <div className="reviews-layout">
                    <UserReview />
                    <UserReview />
                    <UserReview />
                    <UserReview />
                    <UserReview />
                </div>
                <FontAwesomeIcon icon={faXmark} className='allReviewsCloseBtn' onClick={handleClose} />
            </div>
        </div>
    );
}

export default AllReviewsUser;
