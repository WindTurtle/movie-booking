import axios from "axios";
import { domain, token } from "../config/setting";
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
  datVe = (thongTinDatVe) => {
    return axios({
      url: `${domain}/quanlydatve/datve`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
