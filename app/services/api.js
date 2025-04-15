import axios from "axios";

const api = axios.create({
  baseURL: "https://mock.arianalabs.io/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;
