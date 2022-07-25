import { ThongTinRapChieu } from "@type/thongTinRapChieu";
import {
  LICH_CHIEU_RAP_SUCCESS,
  LICH_CHIEU_RAP_REQUEST,
  LICH_CHIEU_RAP_FAILED,
} from "redux/constants/quanLiRap";

const initialState = {
  loadingLichChieuRap: false,
  thongTinRapChieu: new ThongTinRapChieu(),
  errorLichChieuRap: null,
};

export const quanLiRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LICH_CHIEU_RAP_REQUEST:
      return {
        ...state,
        loadingLichChieuRap: true,
        errorLichChieuRap: null,
      };
    case LICH_CHIEU_RAP_SUCCESS:
      return {
        ...state,
        loadingLichChieuRap: false,
        thongTinRapChieu: action.payload,
      };
    case LICH_CHIEU_RAP_FAILED:
      return {
        ...state,
        loadingLichChieuRap: false,
        errorLichChieuRap: action.payload,
      };

    default:
      return state;
  }
};
