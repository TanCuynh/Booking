import axiosClient from "./axiosClient";

const categoryAPI = {
  getCategoryById: (id) => axiosClient.get(`/categories/${id}`),
  getCategoryByDate: (checkin, checkout, hotelid) =>
    axiosClient.get(
      `/categories/?date_in=${checkin}&date_out=${checkout}&hotel_id=${hotelid}`
    ),
};

export default categoryAPI;
