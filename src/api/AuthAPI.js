import axiosClient from "./axiosClient";

export const AuthAPI = {
  login: (params) => axiosClient.post("/login", params),
  signup: (params) => axiosClient.post("/register", params),
  getUserByToken: () => axiosClient.post("/me"),
  changePassword: (params) => axiosClient.post("/change-password", params),
  editProfile: (id, params) =>
    axiosClient.put(`/users/editProfile/${id}`, params),
};
