import axios from "axios";
import { token, linkApi } from "../global";

const QuanLyPhimService = {
  link: "/QuanLyPhim",
  getFilms: async (maNhom) => {
    const params = {
      maNhom: maNhom || "",
    };
    try {
      const { data } = await axios.get(
        linkApi + QuanLyPhimService.link + "/LayDanhSachPhim",
        {
          params,
          headers: {
            TokenCybersoft: token,
          },
        }
      );
      return data?.content;
    } catch (e) {
      console.log(e);
    }
  },
  getFilmById: async (maPhim) => {
    const params = {
      MaPhim: maPhim,
    };
    try {
      const { data } = await axios.get(
        linkApi + QuanLyPhimService.link + "/LayThongTinPhim",
        {
          params,
          headers: {
            TokenCybersoft: token,
          },
        }
      );
      return data?.content;
    } catch (e) {
      console.log(e);
    }
  },
};

export default QuanLyPhimService;
