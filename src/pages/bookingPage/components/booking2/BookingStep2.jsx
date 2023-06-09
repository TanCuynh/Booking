import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './bookingstep2.css';
import { APP_CONTEXT } from "../../../../App";

const BookingStep2 = (data) => {

    const context = useContext(APP_CONTEXT);
    const [formData, setFormData] = useState({
        bank: '',
        cardNumber: '',
        name: ''
    });

    const { bank, cardNumber, name } = formData;

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

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
            <div className='header-layout'>
                <h2>Your Hotel Reservation Bill</h2>
                <h4>This is the detailed description of your hotel reservation</h4>
            </div>

            <div className="bookingStep2Bill">
                <div className="billHotelName">
                    <span>YOUR ONLINE INVOICE</span>
                </div>

                <div className="billDetail">
                    <div className="customerInfo">
                        <div className="customerName">
                            <span>Customer's name: </span>
                            <h3>{context.user.name}</h3>
                        </div>

                        <div className="customerAddress">
                            <span>Address: </span>
                            <p>{context.user.address}</p>
                        </div>

                        <div className="customerPhone">
                            <span>Phone number: </span>
                            <h3>{context.user.phone_number}</h3>
                        </div>

                        <div className="customerEmail">
                            <span>Email: </span>
                            <h3>{context.user.email}</h3>
                        </div>
                    </div>

                    <div className="billInfo">
                        <div className="billDate">
                            <span>Date: </span>
                            <h3>{formattedDate}</h3>
                        </div>
                        <div className="billPrice">
                            <span>Price: </span>
                            <h3>$ {data.data.price} USD</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingStep2;