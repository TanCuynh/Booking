import React, { useState } from "react";
import Upcoming from '../../components/reservationscomponents/upcoming/Upcoming'
import Past from '../../components/reservationscomponents/past/Past'
import './reservations.css'

const Reservations = () => {
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
            </div>

            <div>
                {selectedButton === 1 && <Upcoming />}
                {selectedButton === 2 && <Past />}
            </div>
        </div>
    );
}

export default Reservations;