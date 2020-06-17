import axios from "axios";
import { domain, token, groupID } from "../config/setting";
export class QuanLyAdmin {
  layDanhSachNguoiDung = () => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
      method: "GET",
    });
  };
  themNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  xoaNguoiDung = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  themPhim = (form_data) => {
    return axios({
      url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
    });
  };
  suaPhim = (phim) => {
    return axios({
      url: `${domain}/QuanLyPhim/CapNhatPhim`,
      method: "POST",
      data: phim,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  xoaPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}
export const qLyAdminService = new QuanLyAdmin();
