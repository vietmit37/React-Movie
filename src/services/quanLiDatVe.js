import { ThongTinDatVe } from "../@type/thongTinDatVe";

const { api } = require("./baseService");

export const quanLiDatVeService = {
  getChiTietPhongVe: (maLichChieu) => {
    return api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  },
  datVe: (thongTinDatVe = new ThongTinDatVe()) => {
    return api.post(`QuanLyDatVe/DatVe`, thongTinDatVe);
  },
};
