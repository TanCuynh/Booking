import axiosClient from "./axiosClient";

const categoryAPI = {
  getCategoryById: (id) => axiosClient.get(`/categories/${id}`),
};

export default categoryAPI;
