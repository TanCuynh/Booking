import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingstep1.css';
import 'typeface-montserrat';

const BookingStep1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const { firstName, lastName, email, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === '') {
      alert('Please enter your first name');
      return;
    }

    if (lastName.trim() === '') {
      alert('Please enter your last name');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email address');
      return;
    }

    if (phoneNumber.trim() === '') {
      alert('Please enter your phone number');
      return;
    }

    navigate('/booking/step2');
  };

  return (
    <div>
      <nav>
        <ul className='step-list'>
          <li className='step-item-active'>1</li>
          <li className='step-item'>2</li>
          <li className='step-item-last-child'>3</li>
        </ul>
      </nav>

      <div className='header-layout'>
        <h2 className='booking-information'>Booking Information</h2>
        <h4 className='note'>Please fill up the blank fields below</h4>
      </div>

      <div className='body-layout'>

        <div class="image-container">
          <img src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_SEDK_01.jpg" alt="Ảnh hotel" class="image" />
          <div class="text-container">
            <div class="left-text">
              <p className='name-hotel'>Podo Wae</p>
              <p className='address'>Madiun, Indonesia</p>
              <p className='bed'>1 double bed</p>
            </div>
            <div class="right-text">
              <p>
                <span className='price'>$480 USD</span>
                <span className='for'> for </span>
                <span className='day'>2 nights</span>
              </p>
            </div>
          </div>
        </div>

        <div className='input-container'>
          <div className="first-name">
            <label htmlFor="first-name-input" className="lable-custom">First name</label>
            <input
              type="text"
              id="first-name-input"
              value={firstName}
              name="firstName"
              className="input-custom"
              onChange={handleChange}
            />
            {firstName === '' && <p className='error-message'>Please enter your first name.</p>}
          </div>

          <div className="last-name">
            <label htmlFor="last-name-input" className="lable-custom">Last name</label>
            <input
              type="text"
              id="last-name-input"
              value={lastName}
              name="lastName"
              className="input-custom"
              onChange={handleChange}
            />
            {lastName === '' && <p className='error-message'>Please enter your last name.</p>}
          </div>

          <div className="email">
            <label htmlFor="email-input" className="lable-custom">Email address</label>
            <input
              type="text"
              id="email-input"
              value={email}
              name="email"
              className="input-custom"
              onChange={handleChange}
            />
            {email === '' && <p className='error-message'>Please enter your email address.</p>}
          </div>

          <div className="phone-number">
            <label htmlFor="phone-number-input" className="lable-custom">Phone number</label>
            <input
              type="text"
              id="phone-number-input"
              value={phoneNumber}
              name="phoneNumber"
              className="input-custom"
              onChange={handleChange}
            />
            {phoneNumber === '' && <p className='error-message'>Please enter your phone number.</p>}
          </div>
        </div>
      </div>

      <div className='button-layout'>
        <div className='button-container'>
          <button className='cancel-button'>Cancel</button>
        </div>
        <div className="button-container">
          <button className="skip-button" onClick={handleSubmit}>
            Skip this step
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingStep1;
