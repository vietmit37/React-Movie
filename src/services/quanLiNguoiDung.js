import { api } from "./baseService";

export const quanLiNguoiDung = {
  getAuth(user) {
    return api.post("QuanLyNguoiDung/DangNhap", user);
  },
  layThongTinNguoiDung: () => {
    return api.post(`QuanLyNguoiDung/ThongTinTaiKhoan`);
  },
};
