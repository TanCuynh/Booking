import React from 'react';
import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<div className='main-layout'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default AppLayout;