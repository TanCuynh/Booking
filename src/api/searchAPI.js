import axiosClient from './axiosClient';
export const searchAPI = {
	searchByPriceAndCity: (min, max, city) => axiosClient.get(`/hotels/prices&city?min_price=${min}&max_price=${max}&city=${city}`)
}