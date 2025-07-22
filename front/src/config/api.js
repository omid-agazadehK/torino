import getNewTokens from "@/services/auth";
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (req) => {
    const token = Cookies.get("accessToken");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewTokens();
      if (res?.status === 200) {
        Cookies.set("accessToken", res?.data.accessToken, {
          expires: 30,
        });
        return api(originalRequest);
      } else {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      }
    }
    return Promise.reject(error);
  },
);

export default api;
