import axiosClient from "./axiosClient";


export const bookingAPI = {
	createBooking: (params) => axiosClient.post(`/bookings`, params)
}