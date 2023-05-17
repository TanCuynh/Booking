import React from 'react'
import './loginStep2.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginStep2 = ({ onClose2 }) => {

    const handleClose = () => {
        onClose2();
    }

    return (
        <>
            <div class="login2Container">
                <div class="login2Header">
                    <div class="login2Title">
                        <h2>Login or Signup</h2>
                    </div>
                </div>
                <div className="login2Hello">
                    <div className="login2Avt"></div>
                    <div className="login2HelloContent">
                        <h3>Hello, John Doe</h3>
                        <span>Not you?</span>
                    </div>
                </div>
                <div class="login2Login">
                    <div className="login2Password">
                        <span>Password</span>
                        <input required="" type="password" className="login2PasswordInput" placeholder="Enter your password" />
                    </div>
                    <span>Forgot your password?</span>
                    <button class="login2LoginBtn">Login</button>
                </div>
                <div class="container__else">
                    <hr class="spe-first" />
                    <span class="container__else-text">Or Continue With</span>
                    <hr class="spe-second" />
                </div>
                <div class="container__loginElse">
                    <button href="" class="btn">
                        <FacebookIcon />
                        <span>Facebook</span>
                    </button>
                    <button href="" class="btn">
                        <AppleIcon />
                        <span>AppleID</span>
                    </button>
                    <button href="" class="btn">
                        <GoogleIcon />
                        <span>Google</span>
                    </button>
                </div>
            </div>
            <FontAwesomeIcon icon={faXmark} className='login2CloseBtn' onClick={handleClose}/>
        </>
    )
}

export default LoginStep2