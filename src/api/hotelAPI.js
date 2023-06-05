import axiosClient from "./axiosClient";

const hotelAPI = {
	getAllHotel:() => axiosClient.get(`/hotels`),
	getHotelById: (id) => axiosClient.get(`/hotels/${id}`),
	getLatestHotel: () => axiosClient.get(`/hotels/latest`),
	getHotelNearby: (city) => axiosClient.get(`/hotels/nearby`),

	getMostBookedHotel: () => axiosClient.get(`/hotels/top-booked`),
	getHotelByName: (name) => axiosClient.get(`/hotels/name/${name}`),
	getHotelByAddress: (address) => axiosClient.get(`/hotels/address/${address}`),
	getHotelByNation: (nation) => axiosClient.get(`/hotels/nation/${nation}`),
	getHotelByPrice: (min_price, max_price) => axiosClient.get(`/hotels/price?min_price=${min_price}&max_price=${max_price}`),
	getHotelByRating: (rating) => axiosClient.get(`/hotels/rating?rating=${rating}`),


	getImageByHotel: (id) => axiosClient.get(`/hotel-images/hotel/${id}`),
	
	searchBarHotel: () => axiosClient.get(`/hotels/city`),
}

export default hotelAPI;
