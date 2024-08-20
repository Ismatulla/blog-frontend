import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const token = response.headers["authorization"];
    if (token) {
      localStorage.setItem("token", token.split(" ")[1]);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      localStorage.removeItem("token");
      
    }
    return Promise.reject(error);
  }
);

export default instance;
