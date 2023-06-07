import React from "react";
import './bookingOrder.css'

const BookingOrder = () => {
    const name = "Fully Furnished Apartment";
    const checkin = "12 Mar 2021";
    const duration = 3;
    const guests = 2;
    const price = 1000;

    return (
        <div className="bookingOrder" >

            <div className="bookingOrderContainer">
                <div className="bookingOrderImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" />
                </div>

                <div className="bookingOrderContentContainer">

                    <div className="bookingOrderNameContainer">
                        <p> {name} </p>
                    </div>

                    <div className="bookingOrderInfoContainer">
                        <div className="bookingOrderCheckinContainer">
                            <span>Check-in: </span>
                            <p>{checkin}</p>
                        </div>

                        <div className="bookingOrderDurationContainer">
                            <span>Duration: </span>
                            <p>{duration} nights</p>
                        </div>

                        <div className="bookingOrderGuestsContainer">
                            <span>Guests: </span>
                            <p>{guests} Adults</p>
                        </div>
                    </div>

                    <div className="bookingOrderPriceContainer">
                        <p>Price: $ {price} USD</p>
                    </div>

                </div>
            </div>

            <div className="bookingOrderAcceptedContainer" btn-custom btn-custom-accept>
                <p>Accepted</p>
            </div>
        </div>
    );
}

export default BookingOrder;