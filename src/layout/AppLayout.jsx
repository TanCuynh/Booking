import React, { useContext } from 'react';

import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { APP_CONTEXT } from '../App';
import Loading from '../components/loading/Loading';

const AppLayout = () => {
	const context = useContext(APP_CONTEXT);
	return (
		<>
			{
				context.isLoading ? <Loading />
					:
					<>
						<Navbar />
						<div className='main-layout'>
							<Outlet />
						</div>

						<Footer />
					</>
			}

		</>
	)
}

export default AppLayout;