import { quanLiDatVeService } from "services/quanLiDatVe";
import { connection } from "../../index";
import * as quanLiDatVeConstant from "../constants/quanLiDatVeConstant";

export const actQuanLiDatVe = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(actGetDatVeRequest());
      const res = await quanLiDatVeService.getChiTietPhongVe(maLichChieu);
      if (res.data.statusCode === 200) {
        dispatch(actGetDatVeSuccess(res.data.content));
      }
    } catch {
      console.log("Error");
    }
  };
};

export const actDatVe = (thongTinDatVe) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await quanLiDatVeService.datVe(thongTinDatVe);
      await dispatch(actQuanLiDatVe(thongTinDatVe.maLichChieu));
      await dispatch({
        type: quanLiDatVeConstant.DATVE_SUCCESS,
      });
      await dispatch({
        type: "HIDE_LOADING",
      });
      let taiKhoan = getState().authReducer.userLogin.taiKhoan;
      connection.invoke("datGheThanhCong", taiKhoan, thongTinDatVe.maLichChieu);
      dispatch({
        type: quanLiDatVeConstant.MOVE_TAB,
      });
    } catch (err) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(err);
    }
  };
};
// Đặt vé
export const actDatGhe = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    try {
      await dispatch({
        type: quanLiDatVeConstant.DATGHE,
        payload: ghe,
      });
      // call api ve backend
      let danhSachGheDangDat = getState().quanLiDatVeReducer.danhSachGheDangDat;
      let taiKhoan = getState().authReducer.userLogin.taiKhoan;
      danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
      connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
    } catch {
      console.log("Error");
    }
  };
};

export const actDatGheKhachDat = (ghe) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: quanLiDatVeConstant.DAT_GHE_KHACH_DAT,
        payload: ghe,
      });
    } catch {
      console.log("Error");
    }
  };
};

export const actChangeTabActive = (tabActive) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: quanLiDatVeConstant.CHANGE_TAB_ACTIVE,
        payload: tabActive,
      });
    } catch {
      console.log("Error");
    }
  };
};

const actGetDatVeRequest = () => {
  return {
    type: quanLiDatVeConstant.GET_DAT_VE_REQUEST,
  };
};

const actGetDatVeSuccess = (data) => {
  return {
    type: quanLiDatVeConstant.GET_DAT_VE_SUCCESS,
    payload: data,
  };
};
