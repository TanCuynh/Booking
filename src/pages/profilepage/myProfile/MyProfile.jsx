import React, { useState } from "react";
import ChangeProfile from '../../../components/changeProfile/ChangeProfile'
import AllBookingList from '../../../components/allBookingList/AllBookingList'
import ChangePassword from '../../../components/changePassword/ChangePassword'
import './myProfile.css'

const MyProfile = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <div className="mainlayout">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <div className="leftlayout">
                <span style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    marginLeft: '15px',
                }}
                >MY PROFILE</span>
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
                {selectedButton === 1 && <ChangeProfile />}
                {selectedButton === 2 && <AllBookingList />} 
                {selectedButton === 3 && <ChangePassword />} 
            </div>
        </div>
    );
};

export default MyProfile;
