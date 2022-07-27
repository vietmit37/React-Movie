import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from "./../constants/register";
import { quanLiNguoiDung } from "services/quanLiNguoiDung";

const actRegister = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(actRegisterRequest());

      const res = await quanLiNguoiDung.getRegister(user);
      dispatch(actRegisterSuccess(res.data.content));

      localStorage.setItem("UserCustomer", JSON.stringify(res.data.content));

      navigate("/auth", { replace: true });
    } catch (err) {
      dispatch(actRegisterFailed(err));
    }
  };
};

const actRegisterRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};

export default actRegister;
