import axios from "axios";
import { domain } from "../config/setting";
export class QuanLyNguoiDung {
  dangNhap = (userLogin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  };
  layThongTinTaiKhoan = (userLogin) => {
    return axios({
      url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: userLogin,
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
