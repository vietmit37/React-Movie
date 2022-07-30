import {
  CINEMA_FAILED,
  CINEMA_REQUEST,
  CINEMA_SUCCESS,
} from "redux/constants/cinema";
import { quanLiRapService } from "services/quanLiRapService";

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actCinemaRequest());

    quanLiRapService

      .getCinema()
      .then((res) => dispatch(actCinemaSuccess(res.data.content)))
      .catch((err) => dispatch(actCinemaFailed(err)));
  };
};

const actCinemaRequest = () => {
  return {
    type: CINEMA_REQUEST,
  };
};

const actCinemaSuccess = (data) => {
  return {
    type: CINEMA_SUCCESS,
    payload: data,
  };
};

const actCinemaFailed = (data) => {
  return {
    type: CINEMA_FAILED,
    payload: data,
  };
};

export default actFetchData;
