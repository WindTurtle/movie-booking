import { combineReducers } from "redux";
import QuanLyNguoiDungReducer from "./QuanLyNguoiDungReducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";
const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyPhimReducer,
});

export default rootReducer;
