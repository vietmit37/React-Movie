import {
  AUTH_FAILED,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  THONG_TIN_NGUOI_DUNG,
} from "redux/constants/auth";
import { ThongTinNguoiDung } from "../../@type/thongTinNguoiDung";

let infoUser = {};
if (localStorage.getItem("UserCustomer")) {
  infoUser = JSON.parse(localStorage.getItem("UserCustomer"));
}
const initialState = {
  loadingAuth: false,
  userLogin: infoUser,
  thongTinNguoiDung: new ThongTinNguoiDung(),
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST: {
      state.loadingAuth = true;
      state.error = null;
      return { ...state };
    }

    case AUTH_SUCCESS: {
      state.loadingAuth = false;
      state.userLogin = action.payload;
      state.error = null;
      return { ...state };
    }
    case THONG_TIN_NGUOI_DUNG:
      return {
        ...state,
        thongTinNguoiDung: action.payload,
        loadingAuth: false,
      };
    case AUTH_FAILED: {
      state.loadingAuth = false;
      state.userLogin = null;

      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
