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

    const [dataBookingsByHost, setDataBookingsByHost] = useState({});

    const getDataBookingsByHost = async (id) => {
        const res = await bookingAPI.getBookingsByHostID(id);

        if (res.status === 200) {
            // console.log("allBookings", res.data.data);
            setDataBookingsByHost(res.data.data);
            // console.log("allBookingByHost", res.data.data);
        } else {
            console.log("Error", res);
        }
    }

    const [dataPastBookingsByHost, setDataPastBookingsByHost] = useState({});

    const getDataPastBookingsByHost = async (id) => {
        const res = await bookingAPI.getPastBookingsByHostID(id);

        if (res.status === 200) {
            // console.log("allPastBookings", res.data.data);
            setDataPastBookingsByHost(res.data.data);
        } else {
            console.log("Error", res);
        }
    }

    useEffect(() => {
        getDataBookingsByHost(hostID);
        getDataPastBookingsByHost(hostID);
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
                {
                    Object.keys(dataBookingsByHost)?.length === 0 ? <></> :
                        <>
                            {selectedButton === 1 && <HostUpcoming data={dataBookingsByHost} />}
                            {selectedButton === 2 && <HostPast data={dataPastBookingsByHost} />}
                            {selectedButton === 3 && <HostRejected data={dataPastBookingsByHost} />}
                        </>
                }

            </div>
        </div>
    )
}

export default HostReservation