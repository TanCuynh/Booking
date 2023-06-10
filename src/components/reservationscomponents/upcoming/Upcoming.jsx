import React from "react";
import BookingOrder from "../../bookingOrder/BookingOrder";

const Upcoming = (data) => {
    const upcomingBookings = data.data;
    return (
        <div className="upcomingContiner">
            {
                upcomingBookings.map((booking, index) => {
                    return (
                        <BookingOrder data={booking} />
                    )
                })
            }
        </div>
    );
}

export default Upcoming;