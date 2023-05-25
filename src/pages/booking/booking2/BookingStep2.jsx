import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import './bookingstep2.css';

function BookingStep2() {
    const [formData, setFormData] = useState({
        bank: '',
        cardNumber: '',
        name: ''
      });
    
      const { bank, cardNumber, name } = formData
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kiểm tra các trường dữ liệu đã được nhập
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
        <div>
            <Navbar></Navbar>
            <nav>
                <ul className='step-list'>
                    <li className='step-item step-item-image' ></li>
                    <li className='step-item-active'>2</li>
                    <li className='step-item-last-child'>3</li>
                </ul>
            </nav>

            <div className='header-layout'>
                <h2 className="payment-text">Payment</h2>
            </div>

            <div className="body-layout">
                <div class="vertical-vector"></div>

                <div className="payment-information-container">
                    <p className="text">Payment Transfer:</p>
                    <p className="text">Sub total: $480 USD</p>
                    <p className="text">Tax: 10%</p>
                    <p className="text">Total: $580 USD</p>
                </div>

                <div className='input-container'>
                    <div class="transfer-proof">
                        <label for="transfer-proof">Upload Transfer Proof:</label>
                        <input type="file" id="transfer-proof" name="transfer-proof" accept="image/*" />
                    </div>

                    <div class='bank'>
                        <label htmlFor="bank-input" className="lable-custom">Bank</label>
                        <input
                            type="text"
                            id="bank-input"
                            value={bank}
                            name="bank"
                            className="input-custom"
                            onChange={handleChange}
                        />
                    </div>
                
                    <div class='card-number'>
                        <label htmlFor="card-number-input" className="lable-custom">Card Number</label>
                        <input
                            type="text"
                            id="card-number-input"
                            value={cardNumber}
                            name="cardNumber"
                            className="input-custom"
                            onChange={handleChange}
                        />
                    </div>

                    <div class="name">
                        <label htmlFor="name-input" className="lable-custom">Name</label>
                        <input
                            type="text"
                            id="name-input"
                            value={name}
                            name="name"
                            className="input-custom"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="button-container">
                        <button className="continue-button">
                            Continue to book
                        </button>
            </div>

            <div className='button-layout2'>


                <div className="button-container">
                    <button className="skip-button" onClick={handleSubmit}>
                        Skip this step
                    </button>
                </div>
          
                <div className='button-container'>
                    <button className='cancel-button' >Cancel</button>
                </div>  
            </div>
            <Footer></Footer>
        </div>
    );
}

export default BookingStep2;