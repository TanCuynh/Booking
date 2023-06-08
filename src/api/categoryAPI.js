import axiosClient from "./axiosClient";

const categoryAPI = {
  getCategoryById: (id) => axiosClient.get(`/categories/${id}`),
  getCategoryByCheckInOut: (dateIn, dateOut, hotelId) => axiosClient.get(`/categories/?date_in=${dateIn}&date_out=${dateOut}&hotel_id=${hotelId}`)
};

export default categoryAPI;
