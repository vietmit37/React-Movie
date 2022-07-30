import { LICH_CHIEU_RAP_SUCCESS } from "redux/constants/quanLiRap";
// import { SET_HE_THONG_RAP } from "redux/constants/quanLiRap";
// import { SET_CUM_RAP } from "redux/constants/quanLiRap";
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
// export const actLayHeThongRap = () => {
//   return async (dispatch) => {
//     try {
//       const res = await quanLiRapService.layHeThongRap();
//       dispatch({
//         type: SET_HE_THONG_RAP,
//         payload: res.data.content,
//       });
//     } catch (err) {
//       console.log("Error");
//     }
//   };
// };
// export const actLayThongTinCumRap = (maHeThongRap) => {
//   return async (dispatch) => {
//     try {
//       const res = await quanLiRapService.layThongTinCumRap(maHeThongRap);
//       dispatch({
//         type: SET_CUM_RAP,
//         payload: res.data.content,
//       });
//     } catch (err) {
//       console.log("Error");
//     }
//   };
// };
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
