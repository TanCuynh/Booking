import React, { useState } from "react";
import './myProfile.css'

const MyProfile = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <div className="mainlayout">
            <div className="leftlayout">
                <span style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    marginLeft: '15px',
                }}
                >My Profile</span>
                <div style={{
                    width: '90%',
                    height: '2px',
                    backgroundColor: '#E5E5E5',
                    marginLeft: '5%',
                    marginTop: '20px',
                    marginBottom: '5px'
                }}></div>
                <button className={`btnitem ${selectedButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Profile</button>
                <button className={`btnitem ${selectedButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Booking List</button>
                <button className={`btnitem ${selectedButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>Change PassWord</button>
            </div>
            <div className="rightlayout">
                <p>{selectedButton === 1 ? 'Layout 1' : selectedButton === 2 ? 'Layout 2' : selectedButton === 3 ? 'Layout 3' : ''}</p>
            </div>
        </div>
    );
};

export default MyProfile;
