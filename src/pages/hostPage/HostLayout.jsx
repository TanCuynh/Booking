import React from 'react';
import { Outlet } from 'react-router-dom';
import HostProperties from './hostProperties/HostProperties';
import HostPropertiesModify from './hostPropertiesModify/HostPropertiesModify';
import HostCreateHotel from './hostCreateHotel/HostCreateHotel';
import HostStatistic from './hostStatistic/HostStatistic';


const HostLayout = () => {
	return (<Outlet />)
}


const HostPropertiesPage = () => {
	return <HostProperties />;
};

const HostPropertiesModifyPage = () => {
	return <HostPropertiesModify />;
};

const HostCreateHotelPage = () => {
	return <HostCreateHotel />;
};

const HostStatisticPage = () => {
	return <HostStatistic />;
};

export { HostLayout, HostPropertiesPage, HostPropertiesModifyPage, HostCreateHotelPage, HostStatisticPage };