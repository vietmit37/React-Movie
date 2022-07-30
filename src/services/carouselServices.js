import { api } from "./baseService";

export const carouselService = {
  getCarousel() {
    return api.get("QuanLyPhim/LayDanhSachBanner");
  },
};
