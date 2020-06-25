import { DANG_NHAP } from "../types/QuanLyNguoiDungTypes";
import { DANG_XUAT } from "../types/QuanLyNguoiDungTypes";
import { BINH_LUAN } from "../types/QuanLyNguoiDungTypes";
export const dangNhapAction = (taiKhoan) => {
  return { type: DANG_NHAP, taiKhoan };
};

export const dangXuatAction = () => {
  return { type: DANG_XUAT };
};

export const binhLuanAction = (binhLuan) => {
  return { type: BINH_LUAN, binhLuan };
};
