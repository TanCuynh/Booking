import React, {useState} from "react";
import Upcoming from '../../components/reservationscomponents/upcoming/Upcoming'
import Past from '../../components/reservationscomponents/past/Past'
import './reservations.css'

const Reservations = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <div>
            <p style={{
                fontSize: '33px',
                fontWeight: 'bold',
                marginLeft: '7%',
                marginTop:  '100px',
                marginBottom: '30px'
            }}>Reservations</p>
            <div className="slt-container">
                <button className={`btnitemm ${selectedButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Upcoming</button>
                <button className={`btnitemm ${selectedButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Past</button>
            </div>
            <div style={{
                width: '80%',
                height: "400px",
                overflow: 'auto',
                marginLeft:'7%',
                marginTop: '10px'
            }}>
                {selectedButton === 1 && <Upcoming />}
                {selectedButton === 2 && <Past />} 

            </div>
        </div>
    );
}

export default Reservations;