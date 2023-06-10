import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className='not-found-page'>
			<div>
				<div>
					<img src='https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg' alt='not found' />
				</div>
				<div className='not-found-btn'>
					<button className='btn-custom btn-custom-default' onClick={ () => navigate('/') }>Back Home</button>
				</div>
			</div>
		</div>
	)
}

export default NotFound;