import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './bookingstep2.css';
import { Step, StepLabel, Stepper } from "@mui/material";

const steps = [
    'Booking Information',
    'Your Booking Bill',
    'Booking Complete',
];

const BookingStep2 = () => {
    const [formData, setFormData] = useState({
        bank: '',
        cardNumber: '',
        name: ''
    });

    const { bank, cardNumber, name } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (bank.trim() === '') {
            alert('Please enter your bank');
            return;
        }

        if (cardNumber.trim() === '') {
            alert('Please enter your card number');
            return;
        }

        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }
        navigate('/booking/step3');
    };

    return (
        <div className="bookingStep2Container">
            <div className="bookingStep1Stepper">
                <Stepper activeStep={1} alternativeLabel style={{ width: '600px' }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            <div className='header-layout'>
                <h2>Your Hotel Reservation Bill</h2>
                <h4>This is the detailed description of your hotel reservation</h4>
            </div>

            <div className="bookingStep2Bill">
                <div className="customerInfo">
                    <div className="customerName">
                        <span>Customer's name: </span>
                        <h3>Tran Hong Duc</h3>
                    </div>

                    <div className="customerAddress">
                        <span>Address: </span>
                        <p>23B Thai Thi Boi - Da Nang</p>
                    </div>

                    <div className="customerPhone">
                        <span>Phone number: </span>
                        <h3>0989112223</h3>
                    </div>

                    <div className="customerEmail">
                        <span>Email: </span>
                        <h3>hongduc@gmail.com</h3>
                    </div>
                </div>

                <div className="billInfo">
                    <div className="billDate">
                        <span>Date: </span>
                        <h3>7 Jun 2023</h3>
                    </div>
                    <div className="billPrice">
                        <span>Price: </span>
                        <h3>$ 2000 USD</h3>
                    </div>
                </div>
            </div>

            <div className='button-layout'>
                <div className='button-container'>
                    <button className='cancel-button' >Cancel</button>
                </div>
                <div className="button-container">
                    <button className="skip-button" onClick={handleSubmit}>
                        Next step
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingStep2;