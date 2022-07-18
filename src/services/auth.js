import { api } from "./baseServices";

export const authServices = {
  getAuth(user) {
    return api.post("QuanLyNguoiDung/DangNhap", user);
  },
};
