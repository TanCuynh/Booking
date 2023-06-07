import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './bookingOderFinished.css'

const BookingOderFinished = () => {
    const name = "Fully Furnished Apartment";
    const checkin = "12 Mar 2021";
    const duration = 3;
    const guests = 2;
    const price = 1000;

    const [showTextField, setShowTextField] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleButtonClick = () => {
      setShowTextField(true);
    };
  
    const handleCancelClick = () => {
      setShowTextField(false);
    };
  
    const handleOkClick = () => {
        const textFieldValue = document.getElementById('standard-textarea').value;
        setInputValue(textFieldValue);
        setShowTextField(false);
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
                {!showTextField && (
                    <button className="bookingOderFinishedBtnReview btn-custom" onClick={handleButtonClick}>Review</button> 
                )}
            </div>
            <div className="booking-review-container">
                {showTextField && (
                    <div>
                        <Box
                            component="form"
                            sx={{
                            '& .MuiTextField-root': { m: 1, width: '400px' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                            <TextField
                                id="standard-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                                variant="standard"
                            />
                            </div>
                        </Box>
                        <button onClick={handleCancelClick}>Hủy</button>
                        <button onClick={handleOkClick}>OK</button>
                    </div>
                )}
                {inputValue && <p> {inputValue}</p>}
            </div>
        </div>
    );
}

export default BookingOderFinished;