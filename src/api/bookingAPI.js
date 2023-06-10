import axiosClient from "./axiosClient";

export const bookingAPI = {
  createBooking: (params) => axiosClient.post(`/bookings`, params),

  getBookingsByHotelID: (id) => axiosClient.get(`/bookings/hotel/${id}`),

  getPendingBookingsByUserID: (id) => axiosClient.get(`/bookings/user/${id}`),

  getPastBookingsByUserID: (id) => axiosClient.get(`/bookings/user/past/${id}`),

  getPendingBookingsByHostID: (id) => axiosClient.get(`/bookings/host/${id}`),

  getAcceptedBookingsByHostID: (id) =>
    axiosClient.get(`/bookings/host/past/${id}`),

  getRejectedBookingsByHostID: (id) =>
    axiosClient.get(`/bookings/host/reject/${id}`),

  acceptBooking: (id, params) =>
    axiosClient.put(`/bookings/accept/${id}`, params),

  rejectBooking: (id, params) =>
    axiosClient.put(`/bookings/reject/${id}`, params),
};
