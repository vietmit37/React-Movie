import { api } from "./baseService";

export const movieService = {
  getFilm() {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  getCarousel() {
    return api.get("QuanLyPhim/LayDanhSachBanner");
  },
};
