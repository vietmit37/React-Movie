const { api } = require("./baseService");

export const quanLiRapService = {
  getLichChieuRap: (maPhim) => {
    return api.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  },
  getCinema() {
    return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
  },
  // Admin
  layHeThongRap() {
    return api.get(`QuanLyRap/LayThongTinHeThongRap`);
  },
  layThongTinCumRap(maHeThongRap) {
    return api.get(
      `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
};
