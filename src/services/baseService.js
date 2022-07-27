import axios from "axios";
import { MOVIE_API, TOKEN_CYBER } from "../utils/config";

const TokenCybersoft = TOKEN_CYBER;

const api = axios.create({
  baseURL: MOVIE_API,
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft,
      Authorization: localStorage.getItem("UserCustomer")
        ? `Bearer ${
            JSON.parse(localStorage.getItem("UserCustomer")).accessToken
          }`
        : "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { api };
