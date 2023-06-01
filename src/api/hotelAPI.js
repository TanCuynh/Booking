import axiosClient from "./axiosClient";

const hotelAPI = {
	getHotelById: (id) => axiosClient.get(`/hotels/${id}`),
	getAllHotel:() => axiosClient.get(`/hotels`),
	getCategoryByHotelId: (id) => axiosClient.get(`/categories/hotels/${id}`),
}

export default hotelAPI;