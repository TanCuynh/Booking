import React from 'react'
import HostRejectedBookingOrder from '../../hostRejectedBookingOrder/HostRejectedBookingOrder';

const HostRejected = (data) => {
    const hostRejectedBooking = data.data;
    // console.log("HRB", hostRejectedBooking);
    return (
        <div className="upcomingContainer">
            {
                hostRejectedBooking.map((booking, index) => {
                    return (
                        <HostRejectedBookingOrder key={index} data={booking} />
                    )
                })
            }
        </div>
    )
}

export default HostRejected