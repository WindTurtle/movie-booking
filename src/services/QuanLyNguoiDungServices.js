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
  dangKy = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTin,
    });
  };
  layThongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
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

  layBinhLuan = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "GET",
    });
  };

  themBinhLuan = (binhLuan) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "POST",
      data: binhLuan,
    });
  };
  thongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
