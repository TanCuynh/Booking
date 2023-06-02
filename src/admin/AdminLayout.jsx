import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu, Popover, theme } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faHouse, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css'

const { Content, Sider } = Layout;

const listMenu = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHouse} />,
		url: ''
	},
	{
		title: 'Hotels',
		icon: <FontAwesomeIcon icon={faHotel} />,
		url: 'hotel'
	},
	{
		title: 'Users',
		icon: <FontAwesomeIcon icon={faUser} />,
		url: 'user'
	}
];

const AdminLayout = () => {
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout style={{ minHeight: '100vh', }}>
			<Sider theme='light'>
				<div className='logoContainer'>STAYCATION.</div>
				<Menu theme="light" defaultSelectedKeys={['0']} mode="inline">
					{
						listMenu.map((item) => {
							return (
								<Menu.Item icon={item.icon} key={item.title} onClick={() => navigate(`${item.url}`)}>
									{
										item.title
									}
								</Menu.Item>
							)
						})
					}
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<div className='avatarWrapper'>
					<Popover content={<></>} trigger="click">
						<div className='userClick'>
							<div className=''>
								<Avatar src='https://game8.vn/media/202203/images/-1591253249203679369585(1).jpg' size='large' alt="admin" />
								<span className='userClickName'>
									Admin
								</span>
							</div>
						</div>
					</Popover>
				</div>
				<Content
					style={{
						margin: '0 16px',
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default AdminLayout;