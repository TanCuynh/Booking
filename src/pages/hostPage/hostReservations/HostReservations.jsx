import React, { useContext, useEffect, useState } from 'react'

import './hostReservations.css'
import HostUpcoming from '../../../components/hostReservationsComponents/hostUpcomimg/HostUpcoming';
import HostPast from '../../../components/hostReservationsComponents/hostPast/HostPast';
import HostRejected from '../../../components/hostReservationsComponents/hostRejected/HostRejected';
import { APP_CONTEXT } from '../../../App';
import { bookingAPI } from '../../../api/bookingAPI';

const HostReservation = () => {

    const [selectedButton, setSelectedButton] = useState(1);

    const context = useContext(APP_CONTEXT);

    const hostID = context.user.id;




    const [dataPendingBookingsByHost, setDataPendingBookingsByHost] = useState([]);
    const getDataBookingsByHost = async (id) => {
        const res = await bookingAPI.getPendingBookingsByHostID(id);
        if (res.status === 200) {
            // console.log("pending", res.data.data);
            setDataPendingBookingsByHost(res.data.data);
        } else {
            console.log("Error", res);
        }
    }




    const [dataAcceptedBookingsByHost, setDataAcceptedBookingsByHost] = useState([]);
    const getDataPastBookingsByHost = async (id) => {
        const res = await bookingAPI.getAcceptedBookingsByHostID(id);
        if (res.status === 200) {
            // console.log("accepted", res.data.data);
            setDataAcceptedBookingsByHost(res.data.data);
        } else {
            console.log("Error", res);
        }
    }




    const [dataRejectedBookingsByHost, setDataRejectedBookingsByHost] = useState([]);
    const getDataBookingsRejectedByHost = async (id) => {
        const res = await bookingAPI.getRejectedBookingsByHostID(id);
        if (res.status === 200) {
            // console.log("rejected", res.data.data);
            setDataRejectedBookingsByHost(res.data.data);
        } else {
            console.log("Error", res);
        }
    }






    useEffect(() => {
        getDataBookingsByHost(hostID);
        getDataPastBookingsByHost(hostID);
        getDataBookingsRejectedByHost(hostID);
    }, [hostID])

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };
    return (
        <div className="reservationsContainer">
            <div className="reservationsTitle">
                <p>Reservations</p>
            </div>

            <div className="optionContainer">
                <button className={`optionBtn ${selectedButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Upcoming</button>
                <button className={`optionBtn ${selectedButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Past</button>
                <button className={`optionBtn ${selectedButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>Rejected</button>
            </div>

            <div>

                {selectedButton === 1 && <HostUpcoming data={dataPendingBookingsByHost} />}
                {selectedButton === 2 && <HostPast data={dataAcceptedBookingsByHost} />}
                {selectedButton === 3 && <HostRejected data={dataRejectedBookingsByHost} />}

            </div>
        </div>
    )
}

export default HostReservation