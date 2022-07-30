import { SET_DANH_SACH_NGUOI_DUNG } from "redux/constants/admin.constant";
import {
  SET_HE_THONG_RAP,
  GET_THONG_TIN_PHIM,
  SET_CUM_RAP,
} from "redux/constants/admin.constant";
import { SEARCH_MOVIE } from "redux/constants/listMovie";
import { movieService } from "services/movieService";
import { quanLiDatVeService } from "services/quanLiDatVe";
import { quanLiNguoiDung } from "services/quanLiNguoiDung";
import { quanLiRapService } from "services/quanLiRapService";
import { actFetchData } from "./listMovie";
export const actLayDanhSachNguoiDung = () => {
  return async (dispatch) => {
    try {
      const res = await quanLiNguoiDung.layDanhSachNguoiDung();
      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actThemPhim = (data, navigate) => {
  return async (dispatch) => {
    try {
      let res = await movieService.themPhim(data);
      alert("Thêm phim thành công");
      dispatch(actFetchData());
      navigate("/admin/films");
    } catch (error) {
      console.log(error);
    }
  };
};

export const actCapNhatPhim = (data, navigate) => {
  return async (dispatch) => {
    try {
      let res = await movieService.capNhatPhim(data);
      alert("Cập nhật phim thành công");
      dispatch(actFetchData());
      navigate("/admin/films");
    } catch (error) {
      console.log(error);
    }
  };
};

export const actXoaPhim = (maPhim) => {
  return async (dispatch) => {
    try {
      let res = await movieService.xoaPhim(maPhim);
      alert("Xóa phim thành công");
      dispatch(actFetchData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actSearchMovie = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_MOVIE,
        payload: keyword,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actTaoLichChieu = (thongTinLichChieu) => {
  return async (dispatch) => {
    try {
      let res = await quanLiDatVeService.taoLichChieu(thongTinLichChieu);
      alert("Tạo lịch chiếu thành công");
    } catch (error) {
      console.log(error);
    }
  };
};

export const actLayThongTinPhim = (maPhim) => {
  return async (dispatch) => {
    try {
      let res = await movieService.layThongTinPhim(maPhim);
      dispatch({
        type: GET_THONG_TIN_PHIM,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actLayHeThongRap = () => {
  return async (dispatch) => {
    try {
      const res = await quanLiRapService.layHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP,
        payload: res.data.content,
      });
    } catch (err) {
      console.log("Error");
    }
  };
};
export const actLayThongTinCumRap = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const res = await quanLiRapService.layThongTinCumRap(maHeThongRap);
      dispatch({
        type: SET_CUM_RAP,
        payload: res.data.content,
      });
    } catch (err) {
      console.log("Error");
    }
  };
};
