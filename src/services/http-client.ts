import axios from "axios";
import { LOCAL_STORAGE_KEY } from "../consts";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

httpClient.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.JWT_TOKEN) || ""
    }`;
  return config;
});

httpClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      //unauthentication 401
      if (error.response.status === 401) {
        localStorage.clear();
        if (!window.location.href.includes('auth')) {
          window.location.href = "/auth/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
