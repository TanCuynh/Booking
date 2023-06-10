import React, { useContext, useEffect, useState } from 'react'
import './hostBookingOrder.css'
import { APP_CONTEXT } from '../../App';
import { bookingAPI } from '../../api/bookingAPI';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HostBookingOrder = (data) => {
    const navigate = useNavigate();

    const context = useContext(APP_CONTEXT);

    const bookingID = data.data[0].booking.id;

    const [formattedDateIn, setFormattedDateIn] = useState('');

    const calculateDays = (startDate, endDate) => {
        const time = new Date(endDate) - new Date(startDate);
        const timeUnit = 24 * 60 * 60 * 1000;

        return Math.round(time / timeUnit);
    }

    const handleAccept = async () => {
        try {
            const res = await bookingAPI.acceptBooking(bookingID, {
                status: 'accepted',
            });
            if (res.status === 200) {
                toast.success('Reservation accepted');
                navigate('/')
            }
        }
        catch (err) {
            toast.error("Something went wrong");
        }
    }

    const handleReject = async () => {
        try {
            const res = await bookingAPI.rejectBooking(bookingID, {
                status: 'rejected',
            });
            if (res.status === 200) {
                toast.success('Reservation rejected');
            }
        }
        catch (err) {
            toast.error("Something went wrong");
        }
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
        <div className="hostBookingOrder" >
            <div className="hostBookingOrderContainer">
                <div className="hostBookingOrderImgContainer">
                    <img src={data.data[0].category_image.image_url} alt="" />
                </div>

                <div className="hostBookingOrderContentContainer">

                    <div className="hostBookingOrderNameContainer">
                        <p> {data.data[0].category.name} </p>
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
                            <p>{data.data[0].category.max_people} peoples</p>
                        </div>
                    </div>

                    <div className="hostBookingOrderPriceContainer">
                        <p>Price: $ {data.data[0].booking.total_amount} USD</p>
                    </div>

                </div>
            </div>
            <div className="hostBookingOrderActions">
                {
                    data.data[0].booking.status === "pending" ?
                        <>
                            <div className="hostBookingOrderActionBtn btn-custom btn-custom-accept" onClick={handleAccept}>
                                <p>Accept</p>
                            </div>
                            <div className="hostBookingOrderActionBtn btn-custom btn-custom-danger" onClick={handleReject}>
                                <p>Reject</p>
                            </div>
                        </> : <>
                            <div className="hostBookingOrderActionBtn btn-custom btn-custom-accept">
                                <p>Accepted</p>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

export default HostBookingOrder