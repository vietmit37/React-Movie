<<<<<<< HEAD
import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "redux/constants/auth";
import { authServices } from "services/auth";
=======
import {
  AUTH_FAILED,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  THONG_TIN_NGUOI_DUNG,
} from "redux/constants/auth";
import { quanLiNguoiDung } from "services/quanLiNguoiDung";
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8

const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

<<<<<<< HEAD
    authServices
=======
    quanLiNguoiDung
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
      .getAuth(user)
      .then((res) => {
        dispatch(actAuthSuccess(res.data.content));

<<<<<<< HEAD
        localStorage.setItem("User", JSON.stringify(res.data.content));

        navigate("/", { replace: true });
=======
        localStorage.setItem("UserCustomer", JSON.stringify(res.data.content));

        // chuyen ve trang truosc khi dang nhap thanh cong
        navigate(-1);
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
      })
      .catch((err) => dispatch(actAuthFailed(err)));
  };
};
<<<<<<< HEAD

=======
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
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
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
<<<<<<< HEAD
=======
const actLayThongTinNguoiDungSuccess = (data) => {
  return {
    type: THONG_TIN_NGUOI_DUNG,
    payload: data,
  };
};
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8

const actAuthFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  };
};

export { actLogin };
