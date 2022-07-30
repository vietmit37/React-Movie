import { api } from "./baseService";

export const quanLiNguoiDung = {
  getAuth(user) {
    return api.post("QuanLyNguoiDung/DangNhap", user);
  },
  layThongTinNguoiDung: () => {
    return api.post(`QuanLyNguoiDung/ThongTinTaiKhoan`);
  },
  getRegister(user) {
    return api.post("QuanLyNguoiDung/DangKy", user);
  },
  layDanhSachNguoiDung: () => {
    return api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
  },
};
