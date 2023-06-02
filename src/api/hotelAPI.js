import axiosClient from "./axiosClient";

const hotelAPI = {
	getAllHotel:() => axiosClient.get(`/hotels`),
	getHotelById: (id) => axiosClient.get(`/hotels/${id}`),
	getHotelByCity: (city) => axiosClient.get(`/hotels/${city}`),
	getCategoryByHotelId: (id) => axiosClient.get(`/categories/hotels/${id}`),
}

export default hotelAPI;