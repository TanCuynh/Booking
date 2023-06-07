import React, { useState } from "react";
import ChangeProfile from '../../../components/changeProfile/ChangeProfile'
import AllBookingList from '../../../components/allBookingList/AllBookingList'
import ChangePassword from '../../../components/changePassword/ChangePassword'
import './myProfile.css'
import { useNavigate } from "react-router-dom";

const MyProfile = () => {

    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonId) => {
        if (buttonId === 3) {
            navigate('/user/profile');
        }
        else {
            setSelectedButton(buttonId);
        }
    };

    return (
        <div className="mainlayout">
            <div className="leftlayout">
                <span>My Profile</span>
                <button className={`profileOptionItem ${selectedButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Profile</button>
                <button className={`profileOptionItem ${selectedButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Change Password</button>
                <button className={`profileOptionItem ${selectedButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>Cancel</button>
            </div>
            <div className="rightlayout">
                {selectedButton === 1 && <ChangeProfile />}
                {selectedButton === 2 && <ChangePassword />}
            </div>
        </div>
    );
};

export default MyProfile;
