import React, { useContext, useState } from 'react'
import './login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthAPI } from '../../api/AuthAPI';
import { APP_CONTEXT } from '../../App';
import Loading from '../../components/loading/Loading';
import toast from 'react-hot-toast';


const Login = ({ onClose }) => {
	const context = useContext(APP_CONTEXT);


	const [isLoading, setIsLoading] = useState(false);

	const [openLogin2, setOpenLogin2] = useState(false);
	const [data, setData] = useState({ email: '', password: '' });

	const openPopupLogin2 = () => {
		setOpenLogin2(true);
		document.body.style.overflow = 'hidden';
		const component = document.querySelector('.container');
		component.style.display = 'none';
	};

	const closePopupLogin2 = () => {
		setOpenLogin2(false);
		document.body.style.overflow = 'auto';
	};

	const handleClose = () => {
		onClose();
	}

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	const handleSubmit = async () => {
		setIsLoading(true);

		console.log(data, isLoading)
		await AuthAPI.login(data)
		.then((res) => {
			if(res.status === 200) {
				context.setUser(res.data.data);
				localStorage.setItem('token', res.data.token);
				toast.success("Login successfully");
			}

		})
		.catch((error) => {
			toast.error("Email or password wrong")
		})
		.finally(
			() => {
				setIsLoading(false);
				onClose();
			}
		);
		

		
	}
	return (
		<>
			<div className="container">
				<div className="container__login">
					<div className="container__login-head">
						<h2>Login or Signup</h2>
					</div>
				</div>
				<>
					<div className="container__mail">
						<input required="" type="email" name='email' value={data.email} onChange={handleChange} className="container__mail-input" placeholder="Please enter email" />
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
				</>


				<FontAwesomeIcon icon={faXmark} className='loginCloseBtn' onClick={handleClose} />
			</div>
			{openLogin2 &&
				<div className="login2ModalContainer" onClick={closePopupLogin2}>
					<div className="login2Modal" onClick={(e) => e.stopPropagation()}>
						<div className="login2Container">
							<div className="login2Header">
								<div className="login2Title">
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
							{isLoading ? <Loading /> : <>
								<div className="login2Login">
									<div className="login2Password">
										<span>Password</span>
										<input type="password" name='password' className="login2PasswordInput" placeholder="Enter your password" value={data.password} onChange={handleChange} />
									</div>
									<span>Forgot your password?</span>
									<button className="login2LoginBtn" type='submit' onClick={handleSubmit}>Login</button>
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
							</>}

						</div>
						<FontAwesomeIcon icon={faXmark} className='login2CloseBtn' onClick={handleClose} />
					</div>
				</div >
			}
		</>
		
	)
}

export default Login;