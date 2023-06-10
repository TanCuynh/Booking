import React, { useContext, useEffect, useState } from "react";
import Upcoming from '../../components/reservationscomponents/upcoming/Upcoming'
import Past from '../../components/reservationscomponents/past/Past'
import './reservations.css'
import { APP_CONTEXT } from "../../App";
import { bookingAPI } from "../../api/bookingAPI";

const Reservations = () => {

    const context = useContext(APP_CONTEXT);

    const userID = context.user.id;

    const [pendingBookingByUser, setPendingBookingByUser] = useState([]);
    const getPendingBookings = async (id) => {
        const res = await bookingAPI.getPendingBookingsByUserID(id);
        if (res.status === 200) {
            console.log("pending", res.data.data);
            setPendingBookingByUser(res.data.data);
        } else {
            console.log("Error");
        }
    }

    const [pastBookingByUser, setPastBookingByUser] = useState([]);
    const getPastBookingByUser = async (id) => {
        const res = await bookingAPI.getPastBookingsByUserID(id);
        if (res.status === 200) {
            console.log("past", res.data.data);
            setPastBookingByUser(res.data.data);
        } else {
            console.log("Error");
        }
    }

    useEffect(() => {
        getPendingBookings(userID);
        getPastBookingByUser(userID);
    }, [userID])

    const [selectedButton, setSelectedButton] = useState(1);

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
            </div>

            <div>
                {selectedButton === 1 && <Upcoming data={pendingBookingByUser} />}
                {selectedButton === 2 && <Past data={pastBookingByUser} />}
            </div>
        </div>
    );
}

export default Reservations;