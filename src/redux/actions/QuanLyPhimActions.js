import { XEM_CHI_TIET } from "../types/QuanLyPhimTypes";
export const xemChiTietAction = (maPhim) => {
  return { type: XEM_CHI_TIET, maPhim };
};
