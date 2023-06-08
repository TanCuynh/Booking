import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './bookingOrderFinished.css'
import { toast } from "react-hot-toast";



const BookingOrderFinished = () => {
    const name = "Fully Furnished Apartment";
    const checkin = "12 Mar 2021";
    const duration = 3;
    const guests = 2;
    const price = 1000;

    const [showTextField, setShowTextField] = useState(false);
    const [review, setReview] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showReviewButton, setShowReviewButton] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const handleReviewClick = () => {
        setShowTextField(true);
        setShowReviewButton(false);
    };

    const handleSendClick = () => {
        setShowConfirmation(true);
    };

    const handleShowReviewClick = () => {
        setShowReview(true);
    };

    const handleConfirmOkClick = () => {
        setReview(inputValue);
        setShowTextField(false);
        setShowConfirmation(false);
        setShowReviewButton(true); 
    };

    const handleCancelClick = () => {
        setShowTextField(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="bookingOrderFinished" >
                <div className="bookingOrderFinishedContainer">
                    <div className="bookingOrderFinishedImgContainer">
                        <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" />
                    </div>

                    <div className="bookingOrderFinishedContentContainer">

                        <div className="bookingOrderFinishedNameContainer">
                            <p> {name} </p>
                        </div>

                        <div className="bookingOrderFinishedInfoContainer">
                            <div className="bookingOrderFinishedCheckinContainer">
                                <span>Check-in: </span>
                                <p>{checkin}</p>
                            </div>

                            <div className="bookingOrderFinishedDurationContainer">
                                <span>Duration: </span>
                                <p>{duration} nights</p>
                            </div>

                            <div className="bookingOrderFinishedGuestsContainer">
                                <span>Guests: </span>
                                <p>{guests} Adults</p>
                            </div>
                        </div>

                        <div className="bookingOrderFinishedPriceContainer">
                            <p>Price: $ {price} USD</p>
                        </div>

                    </div>
                </div>

                <div className="bookingOrderFinishedStatusContainer" >
                    <p>Finished</p>
                </div>
                {!review && !showReview && (
                    <button className="bookingOrderFinishedBtnReview btn-custom" onClick={handleReviewClick}>Review</button>
                )}
                {showReview && (
                    <button className="show-review-btn btn-custom btn-custom-danger" onClick={() => setShowReview(false)}>
                    Hide Review
                    </button>
                )}
                {!showReview && review && (
                    <button className="show-review-btn btn-custom btn-custom-accept" onClick={handleShowReviewClick}>
                    Show Review
                    </button>
                )}
            </div>
            {showTextField && (
                <div className="booking-review-container">
                    <div className="ratingAndReview">
                        <div className="ratingContainer">
                            <span className="ratingTitle">Your rating:</span>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <input
                            className="reviewContainer"
                            type="text"
                            placeholder="Your review"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="ratingAndReviewActions">
                        <button className="send-btn  btn-custom" onClick={handleSendClick}>Send</button>
                        <button className="cancel-btn  btn-custom" onClick={handleCancelClick}>Cancel</button>
                    </div>

                </div>
            )}
            {showReview && (
                <div className="booking-review-container">
                    <div className="reviewHeader">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Stack>
                        <p className="date-review">Mar 12 2020</p>
                    </div>
                    <div className="finishedReviewContainer">
                        <p className="review-txt">{review}</p>
                    </div>
                </div>
            )}

            {showConfirmation && (
                <Dialog open={showConfirmation}>
                    <DialogTitle>Confirmation</DialogTitle>
                    <DialogContent>
                        <p>Are you sure you want to save the review?</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleConfirmOkClick}>OK</Button>
                        <Button onClick={() => setShowConfirmation(false)}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}

export default BookingOrderFinished;