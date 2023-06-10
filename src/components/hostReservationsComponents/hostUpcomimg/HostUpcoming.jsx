import React from 'react'
import HostBookingOrder from '../../hostBookingOrder/HostBookingOrder'

const HostUpcoming = (data) => {
    const hostUpcomingBookings = data.data;
    // console.log("HUC", data, hostUpcomingBookings);
    return (
        <div className="upcomingContainer">
            {
                hostUpcomingBookings?.map((booking, index) => {
                    return (
                        <HostBookingOrder data={booking} />
                    )
                })
            }
        </div>
    )
}

export default HostUpcoming