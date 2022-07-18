import { api } from "./baseServices";

export const carouselService = {
  getCarousel() {
    return api.get("QuanLyPhim/LayDanhSachBanner");
  },
};
