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
                <p style={
                    {
                        fontSize: '24px',
                        fontWeight: "bold",
                        marginTop: '15px',
                        marginLeft: '25px',
                    }
                }>Review của Trần Hồng Đức</p>
                <div className="search-review-layout">
                    <div className="hotel-search-bar">
                        <TextField 
                            label="What hotel do you want?"
                            InputLabelProps={{
                                style: {
                                    paddingLeft: '1rem',
                                    fontFamily: 'Montserrat, sans-serif',
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        fontFamily: 'Montserrat, sans-serif',
                                        borderRadius: '99px',
                                    },
                                }}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className="hotel-search-bar">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                '& .MuiRating-icon': { fontSize: '2rem' },
                            }}
                            >
                            <Rating name="customized-10" defaultValue={0.5} max={5} precision={0.5} />
                        </Box>
                    </div>
                </div>
                <div className="reviews-layout">
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>
                </div>
                <FontAwesomeIcon icon={faXmark} className='allReviewsCloseBtn' onClick={handleClose} />
            </div>
        </div>
    );
}

export default AllReviewsUser;
    