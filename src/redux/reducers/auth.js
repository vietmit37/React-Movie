<<<<<<< HEAD
import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "redux/constants/auth";

const initialState = {
  loading: false,
  data: null,
=======
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
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST: {
<<<<<<< HEAD
      state.loading = true;
      state.data = null;
=======
      state.loadingAuth = true;
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
      state.error = null;
      return { ...state };
    }

    case AUTH_SUCCESS: {
<<<<<<< HEAD
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case AUTH_FAILED: {
      state.loading = false;
      state.data = null;
=======
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
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
