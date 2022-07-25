import axios from "axios";
import { MOVIE_API, TOKEN_CYBER } from "../utils/config";

<<<<<<< HEAD:src/utils/apiUtils.js
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo";

=======
const TokenCybersoft = TOKEN_CYBER;
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8:src/services/baseService.js
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
