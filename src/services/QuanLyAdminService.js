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
  // themPhim = (infoMovie) => {
  //   return axios({
  //     url: `${domain}/QuanLyPhim/ThemPhim`,
  //     method: "POST",
  //     data: infoMovie,
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem(token),
  //     },
  //   });
  // };
  // suaPhim = (form_data) => {
  //   return axios({
  //     url: `${domain}/QuanLyPhim/CapNhatPhimUpload`,
  //     method: "POST",
  //     data: form_data,
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem(token),
  //     },
  //   });
  // };
  uploadHinhAnhPhim = (hinhAnh) => {
    return axios({
      url: `${domain}/QuanLyPhim/UploadHinhAnhPhim`,
      method: "POST",
      data: hinhAnh,
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

  taoLichChieu = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: thongTin,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  themTinTuc = (tinTuc) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "POST",
      data: tinTuc,
    });
  };
  suaTinTuc = (id, tinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "PUT",
      data: tinTuc,
    });
  };
  xoaTinTuc = (id) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "DELETE",
    });
  };
}
export const qLyAdminService = new QuanLyAdmin();
