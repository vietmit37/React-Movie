import {
  CINEMA_FAILED,
  CINEMA_REQUEST,
  CINEMA_SUCCESS,
} from "redux/constants/cinema";
import { cinemaServices } from "services/cinemaServices";

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actCinemaRequest());

    cinemaServices
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
