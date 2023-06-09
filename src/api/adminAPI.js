import axiosClient from "./axiosClient";

const adminAPI = {
  getAllUser: () => axiosClient.get(`/users/allUser`),
  changeRole: (email, param) => axiosClient.put(`/users/role/${email}`, param),
};

export default adminAPI;
