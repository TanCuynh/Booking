import React from 'react';
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import './bookingstep3.css';

function BookingStep3() {
    const handleClick = () => {
        window.location.href = '/';
    };
    return (
        <div>
            <Navbar/>

            <nav>
                <ul className='step-list'>
                    <li className='step-item step-item-image'></li>
                    <li className='step-item step-item-image'></li>
                    <li className='step-itemm step-item-image'></li>
                </ul>
            </nav>

            <div className='header-layout'>
                <h1 className="complex-text">Yay! Complex</h1>
            </div>

            <div className='body-layoutt'>
                <img src={require('../Untitled.png')} alt="" />
            </div>
            <div>
                <p className='miss'>We will inform you via email later</p>
                <p className='miss'>once the transaction has been accepted</p>
            </div>

            <div className="button-container">
                <button onClick={handleClick} className="home-button">
                    Back to Home
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default BookingStep3;