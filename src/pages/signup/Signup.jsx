import React, { useState } from 'react'
import './signup.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthAPI } from '../../api/AuthAPI'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const validateString = (input) => {
    const hasUppercase = /[A-Z]/.test(input); // Kiểm tra xem có chứa ít nhất một ký tự hoa
    const hasNumber = /[0-9]/.test(input); // Kiểm tra xem có chứa ít nhất một số

    return hasUppercase && hasNumber;
}
const Signup = ({ onClose }) => {

    const navigate = useNavigate();

    const [dataSignUp, setDataSignUp] = useState(
        {
            name: '',
            email: '',
            password: '',
            repassword: '',
        }
    );

    const [emailAlert, setEmailAlert] = useState(false);
    const [passwordAlert, setPasswordAlert] = useState(false);
    const [repasswordAlert, setRepasswordAlert] = useState(false);
    const [nameAlert, setNameAlert] = useState(false);

    const handleChangeField = (e) => {
        setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let flag = true;
        let messageError = "";
        if (dataSignUp.name.length < 8) {
            flag = false;
            setNameAlert(true);
            messageError = "Your username needs to be at least 8 characters.";
        }
        if (!validateString(dataSignUp.password)) {
            flag = false;
            setPasswordAlert(true);
            setRepasswordAlert(true);
            messageError = "Your password needs to have at least one uppercase character and one number.";
        }
        if (!validateString(dataSignUp.repassword)) {
            flag = false;
            setPasswordAlert(true);
            setRepasswordAlert(true);
            messageError = "Your password needs to have at least one uppercase character and one number.";
        }
        if (dataSignUp.password.length < 8) {
            flag = false;
            setPasswordAlert(true);
            setRepasswordAlert(true);
            messageError = "Your password needs to be at least 8 characters long.";

        }
        if (dataSignUp.password !== dataSignUp.repassword) {
            flag = false;
            setPasswordAlert(true);
            setRepasswordAlert(true);
            messageError = "Your password and password confirmation need to match.";
        }
        if (flag) {
            const res = await AuthAPI.signup(dataSignUp);
            if (res.status === 200) {
                navigate('/');
                console.log("success", res);
                toast.success("Sign up successfully, please login to your new account!");
                setDataSignUp({
                    name: '',
                    email: '',
                    password: '',
                    repassword: '',
                });
                setNameAlert(false);
                setEmailAlert(false);
                setPasswordAlert(false);
                setRepasswordAlert(false);
                onClose();
            }
            else {
                toast.error("Sign up error");
            }
        }
        else {
            toast.error(messageError);
        }
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div class="signupContainer">
                <div class="signupHeader">
                    <div class="signupTitle">
                        <h2>Sign Up</h2>
                    </div>
                </div>
                <div className="signupContent">
                    <span>Password used at least 8 characters, including uppercase, lowercase letters and numbers.</span>
                </div>
                <form onSubmit={handleSubmit} onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}>
                    <div class="signupSignup">
                        <div className="signupContainerMail">
                            <div className="signupContainerMailInputContainer">
                                <span>Name</span>
                                <input
                                    required=""
                                    type="text"
                                    name='name'
                                    value={dataSignUp.name}
                                    onChange={handleChangeField}
                                    className="signupContainerMailInput"
                                    placeholder="Enter your name"
                                />
                            </div>
                            {nameAlert && <span className='signupContainerAlert'>Check your name again!</span>}
                        </div>
                        <div className="signupContainerMail">
                            <div className="signupContainerMailInputContainer">
                                <span>Email</span>
                                <input
                                    required=""
                                    type="email"
                                    name='email'
                                    value={dataSignUp.email}
                                    onChange={handleChangeField}
                                    className="signupContainerMailInput"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {emailAlert && <span className='signupContainerAlert'>Check your email again!</span>}
                        </div>
                        <div className="signupContainerPassword">
                            <div className="signupContainerPasswordInputContainer">
                                <span>Password</span>
                                <input
                                    required=""
                                    type="password"
                                    name='password'
                                    value={dataSignUp.password}
                                    onChange={handleChangeField}
                                    className="signupContainerPasswordInput"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {passwordAlert && <span className='signupContainerAlert'>Check your password again!</span>}
                        </div>
                        <div className="signupContainerPassword">
                            <div className="signupContainerPasswordInputContainer">
                                <span>Password</span>
                                <input
                                    required=""
                                    type="password"
                                    onChange={handleChangeField}
                                    name='repassword'
                                    value={dataSignUp.repassword}
                                    className="signupContainerPasswordInput"
                                    placeholder="Confirm your password"
                                />
                            </div>
                            {repasswordAlert && <span className='signupContainerAlert'>Check your password confirmation again!</span>}
                        </div>
                        <span>By logging in or creating an account, you agree to our <b>Terms and Conditions</b> and <b>Privacy Policy</b>.</span>
                        <button class="signupSignupBtn" type="submit">Sign up</button>
                    </div>
                </form>
                <FontAwesomeIcon icon={faXmark} className='signupCloseBtn' onClick={handleClose} />
            </div>
        </>
    )
}

export default Signup