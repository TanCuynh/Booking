import axiosClient from "./axiosClient";

export const bookingAPI = {
  createBooking: (params) => axiosClient.post(`/bookings`, params),

  getBookingsByHotelID: (id) => axiosClient.get(`/bookings/hotel/${id}`),

  getBookingsByUserID: (id) => axiosClient.get(`/bookings/user/${id}`),

  getPastBookingsByUserID: (id) => axiosClient.get(`/bookings/user/past/${id}`),

  getBookingsByHostID: (id) => axiosClient.get(`/bookings/host/${id}`),

  getPastBookingsByHostID: (id) => axiosClient.get(`/bookings/host/past/${id}`),

  acceptBooking: (id, params) =>
    axiosClient.put(`/bookings/accept/${id}`, params),

  rejectBooking: (id, params) =>
    axiosClient.put(`/bookings/reject/${id}`, params),
};
