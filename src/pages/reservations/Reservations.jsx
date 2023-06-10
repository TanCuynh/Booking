import React, { useContext, useEffect, useState } from "react";
import Upcoming from '../../components/reservationscomponents/upcoming/Upcoming'
import Past from '../../components/reservationscomponents/past/Past'
import './reservations.css'
import { APP_CONTEXT } from "../../App";
import { bookingAPI } from "../../api/bookingAPI";

const Reservations = () => {

    const context = useContext(APP_CONTEXT);

    const userID = context.user.id;

    const [dataAllBookings, setDataAllBookings] = useState([]);

    const getDataAllBookings = async (id) => {
        const res = await bookingAPI.getBookingsByUserID(id);
        if (res.status === 200) {
            // console.log("dataAllBookings", res.data.data);
            setDataAllBookings(res.data.data);
        } else {
            console.log("Error");
        }
    }

    const [dataAllPastBookings, setDataAllPastBookings] = useState([]);
    const getDataAllPastBooking = async (id) => {
        const res = await bookingAPI.getPastBookingsByUserID(id);
        if (res.status === 200) {
            // console.log("dataAllPastBooking", res.data.data);
            setDataAllPastBookings(res.data.data);
        } else {
            console.log("Error");
        }
    }

    useEffect(() => {
        getDataAllBookings(userID);
        getDataAllPastBooking(userID);
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
                {selectedButton === 1 && <Upcoming data={dataAllBookings} />}
                {selectedButton === 2 && <Past data={dataAllPastBookings} />}
            </div>
        </div>
    );
}

export default Reservations;