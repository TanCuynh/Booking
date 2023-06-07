import React, {useState} from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './bookingOrderFinished.css'


  
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
  
    const handleReviewClick = () => {
      setShowTextField(true);
    };
  
    const handleOkClick = () => {
      setShowConfirmation(true);
    };
  
    const handleConfirmOkClick = () => {
      setReview(inputValue);
      setShowTextField(false);
      setShowConfirmation(false);
    };
  
    const handleCancelClick = () => {
      setShowTextField(false);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="bookingOderFinished" >
                <div className="bookingOderFinishedContainer">
                    <div className="bookingOderFinishedImgContainer">
                        <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" />
                    </div>

                    <div className="bookingOderFinishedContentContainer">

                        <div className="bookingOderFinishedNameContainer">
                            <p> {name} </p>
                        </div>

                        <div className="bookingOderFinishedInfoContainer">
                            <div className="bookingOderFinishedCheckinContainer">
                                <span>Check-in: </span>
                                <p>{checkin}</p>
                            </div>

                            <div className="bookingOderFinishedDurationContainer">
                                <span>Duration: </span>
                                <p>{duration} nights</p>
                            </div>

                            <div className="bookingOderFinishedGuestsContainer">
                                <span>Guests: </span>
                                <p>{guests} Adults</p>
                            </div>
                        </div>

                        <div className="bookingOderFinishedPriceContainer">
                            <p>Price: $ {price} USD</p>
                        </div>

                    </div>
                </div>

                <div className="bookingOderFinishedStatusContainer" >
                    <p>Finished</p>
                </div>
                {!review && (
                    <button className="bookingOderFinishedBtnReview btn-custom" onClick={handleReviewClick}>Review</button> 
                )}
            </div>
            <div className="booking-review-container">
                
                {showTextField && (
                    <div>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                        <TextField
                            id="standard-textarea"
                            label="Review"
                            placeholder="Let me know what you think?"
                            multiline
                            variant="standard"
                            className="TxtField"
                            value={inputValue}
                            onChange={handleInputChange}
                        />

                        <button className="send-btn" onClick={handleOkClick}>Send</button>
                        <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                    </div>
                )}
                {review && (
                    <div>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Stack>
                        <p className="date-review">Mar 12 2020</p>
                        <p className="review-txt">{review}</p>
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
        </div>
    );
}

export default BookingOrderFinished;