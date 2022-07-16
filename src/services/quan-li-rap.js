import axios from "axios";
import { token, linkApi } from "../global";

const QuanLyRap = {
  link: "/QuanLyRap",
  getFilmSchedule: async (maPhim) => {
    const params = {
      MaPhim: maPhim,
    };
    try {
      const { data } = await axios.get(
        linkApi + QuanLyRap.link + "/LayThongTinLichChieuPhim",
        {
          params,
          headers: {
            TokenCybersoft: token,
          },
        }
      );
      return data?.content
    } catch (e) {
      console.log(e);
    }
  },
};

export default QuanLyRap;
