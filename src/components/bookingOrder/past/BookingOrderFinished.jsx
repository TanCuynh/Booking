import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './bookingOrderFinished.css'

const BookingOrderFinished = (data) => {

    const [formattedDateIn, setFormattedDateIn] = useState('');

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    const duration = calculateDays(data.data[0].booking.date_in, data.data[0].booking.date_out);

    const [showTextField, setShowTextField] = useState(false);
    const [review, setReview] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showReviewButton, setShowReviewButton] = useState(false);
    const [showReview, setShowReview] = useState(false);

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

        setFormattedDateIn(formatDate(data.data[0].booking.date_in));
    }, [data.data[0].booking.date_in])

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
                        <img src={data.data[0].category_image.image_url} alt="" />
                    </div>

                    <div className="bookingOrderFinishedContentContainer">

                        <div className="bookingOrderFinishedNameContainer">
                            <p> {data.data[0].category.name} </p>
                        </div>

                        <div className="bookingOrderFinishedInfoContainer">
                            <div className="bookingOrderFinishedCheckinContainer">
                                <span>Check-in: </span>
                                <p>{formattedDateIn}</p>
                            </div>
                            <div className=
                                "bookingOrderFinishedDurationContainer">
                                <span>Duration: </span>
                                <p>{duration} nights</p>
                            </div>

                            <div className="bookingOrderFinishedGuestsContainer">
                                <span>Guests: </span>
                                <p>{data.data[0].category.max_people} peoples</p>
                            </div>
                        </div>

                        <div className="bookingOrderFinishedPriceContainer">
                            <p>Price: $ {data.data[0].booking.total_amount} USD</p>
                        </div>

                    </div>
                </div>

                <div className={`bookingOrderFinishedStatusContainer ${data.data[0].booking.status === "accepted" ? "accepted" : "rejected"}`}>
                    <p>{data.data[0].booking.status === "accepted" ? "Accepted" : "Rejected"}</p>
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
                        <button className="bookingFinishedOrderBtn  btn-custom" onClick={handleCancelClick}>Cancel</button>
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