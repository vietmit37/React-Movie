import { api } from "./baseService";

export const movieService = {
  getFilm() {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  getCarousel() {
    return api.get("QuanLyPhim/LayDanhSachBanner");
  },
  // Admin
  themPhim(data) {
    return api.post("QuanLyPhim/ThemPhimUploadHinh", data);
  },
  layThongTinPhim(maPhim) {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  capNhatPhim(data) {
    return api.post("QuanLyPhim/CapNhatPhimUpload", data);
  },
  xoaPhim(maPhim) {
    return api.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
};
