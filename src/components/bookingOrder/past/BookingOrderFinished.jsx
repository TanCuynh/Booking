import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './bookingOrderFinished.css'
import { bookingAPI } from "../../../api/bookingAPI";
import { toast } from "react-hot-toast";

const BookingOrderFinished = (data) => {

    const [dataCheckBookingReview, setDataCheckBookingReview] = useState({});
    const getDataCheckBookingReview = async (id) => {
        const res = await bookingAPI.getReviewByBookingID(id);
        if (res.status === 200) {
            // console.log("Show me the review", res.data.data[0]);
            setDataCheckBookingReview(res.data.data[0]);
        } else {
            console.log("Error");
        }
    }
    useEffect(() => {
        getDataCheckBookingReview(data.data[0].booking.id);
    }, [data.data[0].booking.id])

    const [formattedDateIn, setFormattedDateIn] = useState('');

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    const duration = calculateDays(data.data[0].booking.date_in, data.data[0].booking.date_out);

    const [showTextField, setShowTextField] = useState(false);
    const [review, setReview] = useState("");

    const [ratingValue, setRatingValue] = useState(2.5);
    const [inputValue, setInputValue] = useState("");

    const [showConfirmation, setShowConfirmation] = useState(false);

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


    const [formattedReviewDate, setFormattedReviewDate] = useState("");
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
        setFormattedReviewDate(formatDate(dataCheckBookingReview.created_at));
    }, [dataCheckBookingReview.created_at])

    const handleReviewClick = () => {
        setShowTextField(true);
    };

    const handleSendClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmOkClick = async () => {

        const res = await bookingAPI.createReview({
            booking_id: data.data[0].booking.id,
            content: inputValue,
            rating: ratingValue,
        });

        if (res.status === 200) {
            console.log("Success", res);
            toast.success("Create review successfully");
            window.location.reload();
        } else {
            console.log("Error", res);
            toast.error("Error creating review");
        }

        setReview(inputValue);
        setShowTextField(false);
        setShowConfirmation(false);

    };

    const handleCancelClick = () => {
        setShowTextField(false);
    };

    const handleRatingChange = (e, newValue) => {
        setRatingValue(newValue);
    }

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
                            <div className="bookingOrderFinishedDurationContainer">
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

                {
                    console.log("ABC", dataCheckBookingReview.content)
                }

                <div className={`bookingOrderFinishedStatusContainer ${data.data[0].booking.status === "accepted" ? "accepted" : "rejected"}`}>
                    <p>{data.data[0].booking.status === "accepted" ? "Accepted" : "Rejected"}</p>
                </div>
                {
                    (data.data[0].booking.status === "accepted") ? (
                        <button className="bookingOrderFinishedBtnReview btn-custom" onClick={handleReviewClick}>Review</button>)
                        : (<></>)
                }
            </div>
            {showTextField && (
                <div className="booking-review-container">
                    <div className="ratingAndReview">
                        <div className="ratingContainer">
                            <span className="ratingTitle">Your rating:</span>
                            <Stack spacing={1}>
                                <Rating
                                    name="half-rating"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    value={dataCheckBookingReview?.rating}
                                    onChange={handleRatingChange}
                                />
                            </Stack>
                        </div>
                        <input
                            className="reviewContainer"
                            type="text"
                            placeholder="Your review"
                            value={dataCheckBookingReview?.content}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="ratingAndReviewActions">
                        <button className="send-btn  btn-custom" onClick={handleSendClick}>Send</button>
                        <button className="bookingFinishedOrderBtn  btn-custom" onClick={handleCancelClick}>Cancel</button>
                    </div>

                </div>
            )}
            {/* {showReview && (
                <div className="booking-review-container">
                    <div className="reviewHeader">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={dataCheckBookingReview?.rating} precision={0.5} readOnly />
                        </Stack>
                        <p className="date-review">{formattedReviewDate}</p>
                    </div>
                    <div className="finishedReviewContainer">
                        <p className="review-txt">{dataCheckBookingReview?.content}</p>
                    </div>
                </div>
            )} */}

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