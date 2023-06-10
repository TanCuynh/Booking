import React, { useEffect, useState } from 'react'
import '../hostBookingOrder/hostBookingOrder.css'

const HostRejectedBookingOrder = (data) => {

    const [formattedDateIn, setFormattedDateIn] = useState('');

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    const duration = calculateDays(data.data[0].booking.date_in, data.data[0].booking.date_out);

    useEffect(() => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return formattedDate;
        };

        setFormattedDateIn(formatDate(data.data[0].booking.date_in));
    }, [data.data[0].booking.date_in])

    return (
        <div className="hostBookingOrder">
            {data.data[0].booking.status === "rejected" && (
                <>
                    <div className="hostBookingOrderImgContainer">
                        <img src={data.data[0].category_image.image_url} alt="" />
                    </div>

                    <div className="hostBookingOrderContentContainer">
                        <div className="hostBookingOrderNameContainer">
                            <p>{data.data[0].category.name}</p>
                        </div>

                        <div className="hostBookingOrderInfoContainer">
                            <div className="hostBookingOrderCheckinContainer">
                                <span>Check-in: </span>
                                <p>{formattedDateIn}</p>
                            </div>

                            <div className="hostBookingOrderDurationContainer">
                                <span>Duration: </span>
                                <p>{duration} nights</p>
                            </div>

                            <div className="hostBookingOrderGuestsContainer">
                                <span>Guests: </span>
                                <p>{data.data[0].category.max_people} people</p>
                            </div>
                        </div>

                        <div className="hostBookingOrderPriceContainer">
                            <p>Price: $ {data.data[0].booking.total_amount} USD</p>
                        </div>
                    </div>

                    <div className="hostBookingOrderActions">
                        <div className="hostBookingOrderActionBtn btn-custom btn-custom-danger">
                            <p>Rejected</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default HostRejectedBookingOrder