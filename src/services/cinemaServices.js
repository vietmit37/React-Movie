import { api } from "./baseService";

export const cinemaServices = {
  getCinema() {
    return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
  },
};
