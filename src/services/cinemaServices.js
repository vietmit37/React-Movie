import { api } from "./baseServices";

export const cinemaServices = {
  getCinema() {
    return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
  },
};
