const { api } = require("./baseService");

export const quanLiRapService = {
  getLichChieuRap: (maPhim) => {
    return api.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  },
  getCinema() {
    return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
  },
};
