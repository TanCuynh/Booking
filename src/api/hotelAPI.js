import axiosClient from "./axiosClient";

const hotelAPI = {
	getHotelById: (id) => axiosClient.get(`/hotels/${id}`),

}

export default hotelAPI;