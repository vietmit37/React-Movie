import { ThongTinPhongVe } from "@type/thongTinPhongVe";
import * as quanLiDatVeConstant from "../constants/quanLiDatVeConstant";

const initialState = {
  chiTietDatVe: new ThongTinPhongVe(),
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [
    // {
    //   maGhe: 49026,
    // },
    // {
    //   maGhe: 49027,
    // },
  ],
  tabActive: 0,
  loading: false,
};

export const quanLiDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case quanLiDatVeConstant.GET_DAT_VE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case quanLiDatVeConstant.GET_DAT_VE_SUCCESS:
      return {
        ...state,
        loading: false,
        chiTietDatVe: action.payload,
      };
    case quanLiDatVeConstant.DATGHE:
      // Cập nhật lại danh sách ghe
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (ghe) => ghe.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.payload);
      }

      return {
        ...state,
        danhSachGheDangDat: danhSachGheDangDatUpdate,
      };
    case quanLiDatVeConstant.DATVE_SUCCESS:
      return {
        ...state,
        danhSachGheDangDat: [],
      };
    case quanLiDatVeConstant.MOVE_TAB:
      return {
        ...state,
        tabActive: 1,
      };
    case quanLiDatVeConstant.CHANGE_TAB_ACTIVE:
      return {
        ...state,
        tabActive: action.payload,
      };
    case quanLiDatVeConstant.DAT_GHE_KHACH_DAT:
      return {
        ...state,
        danhSachGheKhachDat: action.payload,
      };
    default:
      return state;
  }
};
