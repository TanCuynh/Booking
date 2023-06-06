import React, { useState } from 'react'


import './hostReservations.css'
import HostUpcoming from '../../../components/hostReservationsComponents/hostUpcomimg/HostUpcoming';
import HostPast from '../../../components/hostReservationsComponents/hostPast/HostPast';
import HostRejected from '../../../components/hostReservationsComponents/hostRejected/HostRejected';

const HostReservation = () => {

    const [selectedButton, setSelectedButton] = useState(null);

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
                {selectedButton === 1 && <HostUpcoming />}
                {selectedButton === 2 && <HostPast />}
                {selectedButton === 3 && <HostRejected />}
            </div>
        </div>
    )
}

export default HostReservation