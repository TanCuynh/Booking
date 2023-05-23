import React, { useState } from 'react'
import './login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LoginStep2 from "../loginStep2/LoginStep2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const LoginStep1 = ({ onClose }) => {

    const [openLogin2, setOpenLogin2] = useState(false);

    const [email, setEmail] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const openPopupLogin2 = () => {
        console.log(email);
        if (email === '') {
            setShowAlert(true);
            // console.log("Siu?");
        } else {
            setOpenLogin2(true);
            document.body.style.overflow = 'hidden';
            const component = document.querySelector('.container');
            component.style.display = 'none';
        }
    };

    const closePopupLogin2 = () => {
        setOpenLogin2(false);
        document.body.style.overflow = 'auto';
    };

    const handleClose = () => {
        onClose();
    }

    return (
        <>
            <div className="container">
                <div className="container__login">
                    <div className="container__login-head">
                        <h2>Login or Signup</h2>
                    </div>
                </div>
                <div className="container__mail">
                    <input
                        type="email"
                        className="container__mail-input"
                        placeholder="Please enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {showAlert && <span>You haven't entered your email!</span>}
                    <span className="container__mail-mess">We’ll send you a message to confirm your email. Standard message and data
                        rates apply.</span>
                    <button className="container__mail-login" onClick={openPopupLogin2}>Continue</button>
                </div>
                <div className="container__else">
                    <hr className="spe-first" />
                    <span className="container__else-text">Or Continue With</span>
                    <hr className="spe-second" />
                </div>
                <div className="container__loginElse">
                    <button href="" className="btn">
                        <FacebookIcon />
                        <span>Facebook</span>
                    </button>
                    <button href="" className="btn">
                        <AppleIcon />
                        <span>AppleID</span>
                    </button>
                    <button href="" className="btn">
                        <GoogleIcon />
                        <span>Google</span>
                    </button>
                </div>
                <FontAwesomeIcon icon={faXmark} className='loginCloseBtn' onClick={handleClose} />
            </div>
            {openLogin2 &&
                <div className="login2ModalContainer" onClick={closePopupLogin2}>
                    <div className="login2Modal" onClick={(e) => e.stopPropagation()}>
                        <LoginStep2 onClose2={closePopupLogin2} />
                    </div>
                </div>
            }

        </>
    )
}

export default LoginStep1