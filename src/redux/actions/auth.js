import {
  AUTH_FAILED,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  THONG_TIN_NGUOI_DUNG,
} from "redux/constants/auth";
import { quanLiNguoiDung } from "services/quanLiNguoiDung";

const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    quanLiNguoiDung
      .getAuth(user)
      .then((res) => {
        dispatch(actAuthSuccess(res.data.content));

        localStorage.setItem("UserCustomer", JSON.stringify(res.data.content));

        // chuyen ve trang truosc khi dang nhap thanh cong
        navigate("/", { replace: true });
      })
      .catch((err) => dispatch(actAuthFailed(err)));
  };
};

export const actThongTinNguoiDung = () => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());
      const res = await quanLiNguoiDung.layThongTinNguoiDung();
      if (res.data.statusCode === 200) {
        dispatch(actLayThongTinNguoiDungSuccess(res.data.content));
      }
    } catch {
      dispatch(actAuthFailed("Lỗi khi lấy thông tin người dùng"));
      console.log("Error");
    }
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actLayThongTinNguoiDungSuccess = (data) => {
  return {
    type: THONG_TIN_NGUOI_DUNG,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  };
};

export { actLogin };
