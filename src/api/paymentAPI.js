import axiosClient from "./axiosClient";

export const paymentAPI = {
	updatePayment: (id, params) => axiosClient.put(`/payments/?booking_id=${id}`, params)
}