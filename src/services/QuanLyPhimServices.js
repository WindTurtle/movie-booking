import axios from "axios";
import { domain, groupID } from "../config/setting";
export class QuanLyPhimServices {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/quanLyPhim/laydanhsachphim?manhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
  layHeThongRap = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
      method: "GET",
    });
  };

  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  };

  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };
  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
