import React, { useContext, useState } from 'react'
import './login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthAPI } from '../../api/AuthAPI';
import { APP_CONTEXT } from '../../App';
import toast from 'react-hot-toast';
import { CircularProgress } from '@mui/material';


const Login = ({ onClose }) => {
	const context = useContext(APP_CONTEXT);

	const [isLoading, setIsLoading] = useState(false);

	const [data, setData] = useState({ email: '', password: '' });

	const [emailAlert, setEmailAlert] = useState(false);
	const [passwordAlert, setPasswordAlert] = useState(false);

	const handleClose = () => {
		onClose();
	}

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.email === "") {
			setEmailAlert(true);
		}
		if (data.password === "") {
			setPasswordAlert(true);
		} else {
			setIsLoading(true);
			await AuthAPI.login(data)
				.then((res) => {
					if (res.status === 200) {
						context.setUser(res.data.data);
						localStorage.setItem('token', res.data.token);
						toast.success("Login successfully");
					}

				})
				.catch(() => {
					toast.error("Email or password wrong!")
				})
				.finally(
					() => {
						setIsLoading(false);
						onClose();
					}
				);
		}
	}

	return (
		<>
			<div className="container">
				<div className="loginContainer">
					<div className="loginContainerHeader">
						<h2>Login</h2>
					</div>
				</div>
				<form onSubmit={ handleSubmit } onKeyPress={ (e) => e.key === 'Enter' && handleSubmit(e) }>
					<div className="loginContainerMail">
						<div className="loginContainerMailInputContainer">
							<span>Email</span>
							<input
								required=""
								type="email"
								name='email'
								value={ data.email }
								onChange={ handleChange }
								className="loginContainerMailInput"
								placeholder="Please enter email"
							/>
						</div>
						{ emailAlert && <span className='loginContainerAlert'>You haven't entered your email!</span> }
					</div>
					<div className="loginContainerPassword">
						<div className="loginContainerPasswordInputContainer">
							<span>Password</span>
							<input
								required=""
								type="password"
								name='password'
								value={ data.password }
								onChange={ handleChange }
								className="loginContainerPasswordInput"
								placeholder="Enter your password"
							/>
						</div>
						{ passwordAlert && <span className='loginContainerAlert'>You haven't enter your password!</span> }
					</div>
					<div className="loginContainerConfirm">
						<span className="loginContainerMailMess">We’ll send you a message to confirm your email. Standard message and data
							rates apply.</span>
						<button className="loginContainerBtn" disabled={ isLoading } type='submit'>
							{
								isLoading ?
									<div className='loadingWrap'>
										<CircularProgress className='iconSpinner' size={ 24 } />
										<span>Pending</span>
									</div>
									:
									<span>Login</span>
							}
						</button>
					</div>
					<div className="loginContainerElse">
						<hr className="spe-first" />
						<span className="loginContainerElseText">Or Continue With</span>
						<hr className="spe-second" />
					</div>
					<div className="loginContainerElseBtn">
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
				</form>


				<FontAwesomeIcon icon={ faXmark } className='loginCloseBtn' onClick={ handleClose } />
			</div >
		</>

	)
}

export default Login;