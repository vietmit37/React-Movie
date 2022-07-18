import { api } from "./baseServices";

export const movieServices = {
  getMovie() {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
};
