import React from "react";
import BookingOrderFinished from "../../bookingOrder/past/BookingOrderFinished";
import './past.css'

const Past = () => {
    return (
        <div>
            <div className="upcomingContiner">
            <BookingOrderFinished/>
            <BookingOrderFinished/>
            <BookingOrderFinished/>
            <BookingOrderFinished/>
            <BookingOrderFinished/>
        </div>
        </div>
    );
}

export default Past;