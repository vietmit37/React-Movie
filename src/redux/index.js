import { combineReducers } from "redux";
import sliderMovieReducer from "./reducers/getCarousel";
import listMovieReducer from "./reducers/getListMovie";
import cinemaReducer from "./reducers/getCinema";
import authReducer from "./reducers/auth";
<<<<<<< HEAD

=======
import { quanLiRapReducer } from "./reducers/quanLiRap";
import { quanLiDatVeReducer } from "./reducers/quanLiDatVe";
import { loadingReducer } from "./reducers/loadingReducer";
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
const rootReducer = combineReducers({
  sliderMovieReducer,
  listMovieReducer,
  cinemaReducer,
  authReducer,
<<<<<<< HEAD
=======
  quanLiRapReducer,
  quanLiDatVeReducer,
  loadingReducer,
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
});
export default rootReducer;
