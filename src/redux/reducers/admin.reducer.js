import {
  SET_CUM_RAP,
  SET_HE_THONG_RAP,
  GET_THONG_TIN_PHIM,
  SET_DANH_SACH_NGUOI_DUNG,
} from "redux/constants/admin.constant";

const initialState = {
  thongTinPhim: {},
  heThongRap: [],
  cumRapChieu: [],
  danhSachNguoiDung: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THONG_TIN_PHIM:
      state.thongTinPhim = action.payload;
      return { ...state };
    case SET_HE_THONG_RAP:
      return {
        ...state,
        heThongRap: action.payload,
      };
    case SET_CUM_RAP:
      return {
        ...state,
        cumRapChieu: action.payload,
      };
    case SET_DANH_SACH_NGUOI_DUNG:
      return {
        ...state,
        danhSachNguoiDung: action.payload,
      };
    default:
      return state;
  }
};
