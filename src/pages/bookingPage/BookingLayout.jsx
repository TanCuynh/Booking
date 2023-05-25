import React from 'react';
import { Outlet } from 'react-router-dom';
import BookingStep1 from './components/booking1/BookingStep1';
import BookingStep2 from './components/booking2/BookingStep2';
import BookingStep3 from './components/booking3/BookingStep3';

const BookingLayout = () => {
	return (
		<Outlet />
	)
}

const BookingStepPage1 = () => {
	return <BookingStep1 />;
};

const BookingStepPage2 = () => {
	return <BookingStep2 />;
};

const BookingStepPage3 = () => {
	return <BookingStep3 />;
};


export { BookingLayout, BookingStepPage1, BookingStepPage2, BookingStepPage3 }