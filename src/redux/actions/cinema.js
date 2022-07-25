import {
  CINEMA_FAILED,
  CINEMA_REQUEST,
  CINEMA_SUCCESS,
} from "redux/constants/cinema";
<<<<<<< HEAD
import { cinemaServices } from "services/cinemaServices";
=======
import { quanLiRapService } from "services/quanLiRapService";
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actCinemaRequest());

<<<<<<< HEAD
    cinemaServices
=======
    quanLiRapService
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
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
