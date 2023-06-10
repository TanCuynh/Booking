import React from 'react'
import HostBookingOrder from '../../hostBookingOrder/HostBookingOrder'

const HostPast = (data) => {
    const hostPastBooking = data.data;
    return (
        <div className="upcomingContainer">
            {
                hostPastBooking.map((booking, index) => {
                    return (
                        <HostBookingOrder data={booking} />
                    )
                })
            }
        </div>
    )
}

export default HostPast