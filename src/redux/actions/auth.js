import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "redux/constants/auth";
import { authServices } from "services/auth";

const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    authServices
      .getAuth(user)
      .then((res) => {
        dispatch(actAuthSuccess(res.data.content));

        localStorage.setItem("User", JSON.stringify(res.data.content));

        navigate("/", { replace: true });
      })
      .catch((err) => dispatch(actAuthFailed(err)));
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

const actAuthFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  };
};

export { actLogin };
