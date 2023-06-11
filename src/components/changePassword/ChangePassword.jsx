import React, { useContext, useState } from "react";
import './changePassword.css';
import { toast } from "react-hot-toast";
import { AuthAPI } from "../../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { APP_CONTEXT } from "../../App";

const ChangePassword = () => {
    const navigate = useNavigate();
    const context = useContext(APP_CONTEXT);
    const [formData, setFormData] = useState(
        {
            old_password: '',
            new_password: '',
            re_new_password: '',
        }
    );
    const { old_password, new_password, re_new_password } = formData;

    const [error, setError] = useState(""); // eslint-disable

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (old_password.trim() === '') {
            toast.error("You must enter your current password");
        }
        if (new_password.trim() === '') {
            toast.error("You must enter a new password");
        }
        if (re_new_password.trim() === '') {
            toast.error("You must confirm your new password");
        }
        if (new_password !== re_new_password) {
            toast.error("Your new password and confirmation must match");
        }
        try {
            const res = await AuthAPI.changePassword(formData);
            if (res.status === 200) {
                console.log("success", res);
                toast.success("Password updated successfully, please log in again");
                navigate("/");
                localStorage.setItem('token', '');
                context.setUser({});
                setFormData(
                    {
                        old_password: '',
                        new_password: '',
                        re_new_password: '',
                    }
                );
            } else {
                const responseJson = await res.json();
                const { error } = responseJson;
                setError(error);
            }
        }
        catch (error) {
            if (error.response.data.error.toLowerCase() === "new password must be different from old password") {
                toast.error("New password must be different from old password");
            }
            if (error.response.data.error.toLowerCase() === "old password is incorrect") {
                toast.error("Old password is incorrect");
            }
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
                        value={old_password}
                        name="old_password"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {old_password === '' && <p className='error-message'>Please enter your current password</p>}
                </div>
                <div className="changePasswordInput">
                    <label className="changePasswordLabel">Your new password</label>
                    <input
                        type="password"
                        id="new-password-input"
                        value={new_password}
                        name="new_password"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {new_password === '' && <p className='error-message'>Please enter your new password</p>}
                </div>
                <div className="changePasswordInput">
                    <label className="changePasswordLabel">Confirm your new password</label>
                    <input
                        type="password"
                        id="new-password2-input"
                        value={re_new_password}
                        name="re_new_password"
                        className="input-custom"
                        onChange={handleChange}
                    />
                    {re_new_password === '' && <p className='error-message'>Please enter your new password again</p> ||
                        re_new_password !== new_password && <p className='error-message'>Password incorrect</p>}
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