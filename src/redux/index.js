import { combineReducers } from "redux";
import sliderMovieReducer from "./reducers/getCarousel";
import listMovieReducer from "./reducers/getListMovie";
import cinemaReducer from "./reducers/getCinema";
import authReducer from "./reducers/auth";
import { quanLiRapReducer } from "./reducers/quanLiRap";
import { quanLiDatVeReducer } from "./reducers/quanLiDatVe";
import { loadingReducer } from "./reducers/loadingReducer";
const rootReducer = combineReducers({
  sliderMovieReducer,
  listMovieReducer,
  cinemaReducer,
  authReducer,
  quanLiRapReducer,
  quanLiDatVeReducer,
  loadingReducer,
});
export default rootReducer;
