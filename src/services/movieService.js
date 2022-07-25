<<<<<<< HEAD
import { api } from "./baseServices";

export const movieServices = {
  getMovie() {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
=======
import { api } from "./baseService";

export const movieService = {
  getFilm() {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  getCarousel() {
    return api.get("QuanLyPhim/LayDanhSachBanner");
  },
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
};
