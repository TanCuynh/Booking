import React, { useState } from "react";
import './changePassword.css';
import { toast } from "react-hot-toast";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        reNewPassword: '',
    });
    const { currentPassword, newPassword, reNewPassword } = formData;

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPassword.trim() === '') {
            // alert('Please enter Current Password');
            toast.error("You must enter your current password");
            return;
        }

        if (newPassword.trim() === '') {
            // alert('Please enter New Password');
            toast.error("You must enter a new password");

            return;
        }

        if (reNewPassword.trim() === '') {
            // alert('Please enter New Password');
            toast.error("You must confirm your new password");

            return;
        }

        if (newPassword !== reNewPassword) {
            // alert('New password and confirm password do not match');
            toast.error("Your new password and confirmation must match");

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
                        value={reNewPassword}
                        name="reNewPassword"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {reNewPassword === '' && <p className='error-message'>Please enter your new password again.</p> ||
                        reNewPassword !== newPassword && <p className='error-message'>Password incorrect</p>}
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