import React from 'react'
import './hostBookingOrder.css'

const HostBookingOrder = () => {
    const name = "Fully Furnished Apartment";
    const checkin = "12 Mar 2021";
    const duration = 3;
    const guests = 2;
    const price = 1000;

    return (
        <div className="hostBookingOrder" >

            <div className="hostBookingOrderContainer">
                <div className="hostBookingOrderImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" />
                </div>

                <div className="hostBookingOrderContentContainer">

                    <div className="hostBookingOrderNameContainer">
                        <p> {name} </p>
                    </div>

                    <div className="hostBookingOrderInfoContainer">
                        <div className="hostBookingOrderCheckinContainer">
                            <span>Check-in: </span>
                            <p>{checkin}</p>
                        </div>

                        <div className="hostBookingOrderDurationContainer">
                            <span>Duration: </span>
                            <p>{duration} nights</p>
                        </div>

                        <div className="hostBookingOrderGuestsContainer">
                            <span>Guests: </span>
                            <p>{guests} Adults</p>
                        </div>
                    </div>

                    <div className="hostBookingOrderPriceContainer">
                        <p>Price: $ {price} USD</p>
                    </div>

                </div>
            </div>

            <div className="hostBookingOrderAcceptedContainer">
                <p>Accepted</p>
            </div>
        </div>
    );
}

export default HostBookingOrder