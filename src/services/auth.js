import { api } from "./baseService";

export const authServices = {
  getAuth(user) {
    return api.post("QuanLyNguoiDung/DangNhap", user);
  },
};
