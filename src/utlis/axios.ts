import axios from "axios";

const baseAdminAxios = axios.create({
  baseURL: "https://dummyjson.com/",
});

const STATUS_CODE = [200, 201];

baseAdminAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers || {};
      // config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseAdminAxios.interceptors.response.use(
  (response) => {
    const statusCode = response.status;

    if (STATUS_CODE.includes(statusCode)) {
      return response;
    }
    response.data = {
      success: false,
      data: [],
    };
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default baseAdminAxios;
