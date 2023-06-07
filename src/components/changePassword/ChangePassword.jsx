import React, { useState } from "react";
import './changePassword.css';
import { Height } from "@mui/icons-material";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        newPassword2: '',
        verify: ''
    });
    const { currentPassword, newPassword, newPassword2, verify } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPassword.trim() === '') {
            alert('Please enter Current Password');
            return;
        }

        if (newPassword.trim() === '') {
            alert('Please enter New Password');
            return;
        }

        if (newPassword2.trim() === '') {
            alert('Please enter New Password');
            return;
        }

        if (verify.trim() === '') {
            alert('Please enter Verify Code');
            return;
        }
    };

    return (
        <div className="changePassword">
            <div className="changePasswordTitle">
                <h3>Change your password</h3>
            </div>
            <div className="horizontalLine"></div>
            <div className="changePasswordContainer">
                <div className="changePasswordInput">
                    <label className="changePasswordLabel">Your current password</label>
                    <input
                        type="password"
                        id="current-password-input"
                        value={currentPassword}
                        name="currentPassword"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {currentPassword === '' && <p className='error-message'>Please enter your current password.</p>}
                </div>
                <div className="changePasswordInput">
                    <label className="changePasswordLabel">Your new password</label>
                    <input
                        type="password"
                        id="new-password-input"
                        value={newPassword}
                        name="newPassword"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {newPassword === '' && <p className='error-message'>Please enter your new password.</p>}
                </div>
                <div className="changePasswordInput">
                    <label className="changePasswordLabel">Confirm your new password</label>
                    <input
                        type="password"
                        id="new-password2-input"
                        value={newPassword2}
                        name="newPassword2"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {newPassword2 === '' && <p className='error-message'>Please enter your new password again.</p> ||
                        newPassword2 !== newPassword && <p className='error-message'>Password incorrect</p>}
                </div>
                <div className="changePasswordBtn">
                    <button onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;