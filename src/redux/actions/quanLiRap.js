import { LICH_CHIEU_RAP_SUCCESS } from "redux/constants/quanLiRap";
import { LICH_CHIEU_RAP_FAILED } from "redux/constants/quanLiRap";
import { LICH_CHIEU_RAP_REQUEST } from "redux/constants/quanLiRap";
import { quanLiRapService } from "services/quanLiRapService";

export const getLichChieuRap = (maPhim) => {
  return async (dispatch) => {
    try {
      dispatch(actLichChieuRapRequest());
      const res = await quanLiRapService.getLichChieuRap(maPhim);
      dispatch(actLichChieuRapSuccess(res.data.content));
    } catch (err) {
      dispatch(actLichChieuRapFailed(err));
      console.log("Error");
    }
  };
};
const actLichChieuRapRequest = () => {
  return {
    type: LICH_CHIEU_RAP_REQUEST,
  };
};
const actLichChieuRapSuccess = (data) => {
  return {
    type: LICH_CHIEU_RAP_SUCCESS,
    payload: data,
  };
};
const actLichChieuRapFailed = (data) => {
  return {
    type: LICH_CHIEU_RAP_FAILED,
    payload: data,
  };
};
