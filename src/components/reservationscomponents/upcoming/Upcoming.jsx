import React from "react";
import BookingOrder from "../../bookingOrder/BookingOrder";

const Upcoming = () => {
    return (
        <div className="upcomingContiner">
            <BookingOrder/>
            <BookingOrder/>
            <BookingOrder/>
        </div>
    );
}

export default Upcoming;