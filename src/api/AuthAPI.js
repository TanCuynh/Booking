import axiosClient from "./axiosClient"

export const AuthAPI = {
	login: (params) => axiosClient.post('/login', params),
}