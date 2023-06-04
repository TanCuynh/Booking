import React, { useState } from 'react'
import './signup.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Signup = ({ onClose }) => {


    const [emailAlert, setEmailAlert] = useState(false);
    const [passwordAlert, setPasswordAlert] = useState(false);
    const [repasswordAlert, setRepasswordAlert] = useState(false);

    const handleSubmit = () => {
        setEmailAlert(true);
        setPasswordAlert(true);
        setRepasswordAlert(true);
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
                                <span>Email</span>
                                <input
                                    required=""
                                    type="email"
                                    name='email'
                                    // value={data.email}
                                    // onChange={handleChange}
                                    className="signupContainerMailInput"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {emailAlert && <span className='signupContainerAlert'>You haven't entered your email!</span>}
                        </div>
                        <div className="signupContainerPassword">
                            <div className="signupContainerPasswordInputContainer">
                                <span>Password</span>
                                <input
                                    required=""
                                    type="password"
                                    name='password'
                                    className="signupContainerPasswordInput"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {passwordAlert && <span className='signupContainerAlert'>You haven't entered your password!</span>}
                        </div>
                        <div className="signupContainerPassword">
                            <div className="signupContainerPasswordInputContainer">
                                <span>Password</span>
                                <input
                                    required=""
                                    type="password"
                                    name='repassword'
                                    className="signupContainerPasswordInput"
                                    placeholder="Confirm your password"
                                />
                            </div>
                            {repasswordAlert && <span className='signupContainerAlert'>You haven't confirmed your password!</span>}
                        </div>
                        <span>By logging in or creating an account, you agree to our <b>Terms and Conditions</b> and <b>Privacy Policy</b>.</span>
                        <button class="signupSignupBtn">Sign up</button>
                    </div>
                </form>
                <FontAwesomeIcon icon={faXmark} className='signupCloseBtn' onClick={handleClose} />
            </div>
        </>
    )
}

export default Signup