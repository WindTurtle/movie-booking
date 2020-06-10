import { DANG_NHAP } from "../types/QuanLyNguoiDungTypes";
import { DANG_XUAT } from "../types/QuanLyNguoiDungTypes";
export const dangNhapAction = (taiKhoan) => {
  return { type: DANG_NHAP, taiKhoan };
};

export const dangXuatAction = () => {
  return { type: DANG_XUAT };
};
