import { DANG_NHAP } from "../types/QuanLyNguoiDungTypes";
import { DANG_XUAT } from "../types/QuanLyNguoiDungTypes";
import { BINH_LUAN } from "../types/QuanLyNguoiDungTypes";

let taiKhoan = "";
if (localStorage.getItem("userLogin")) {
  taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
}
const initialState = {
  taiKhoan: taiKhoan,
  binhluan: "",
  rating: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case DANG_XUAT: {
      localStorage.removeItem("userLogin");
      state.taiKhoan = "";
      window.location.reload();
      return { ...state };
    }
    case BINH_LUAN: {
      return { ...state };
    }
    default:
  }
  return { ...state };
};
