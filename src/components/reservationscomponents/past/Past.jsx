import React from "react";
import BookingOrderFinished from "../../bookingOrder/past/BookingOrderFinished";
import './past.css'

const Past = (data) => {
    const pastBookings = data.data;
    return (
        <div>
            <div className="upcomingContiner">
                {
                    pastBookings.map((booking, index) => {
                        return (
                            <BookingOrderFinished key={index} data={booking} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Past;