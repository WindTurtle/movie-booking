import React, { useState, useEffect, Fragment } from "react";
import "./CreateShowTimeForm.scss";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import TableShowTimeList from "../TableShowTimeList/TableShowTimeList";
import swal from "sweetalert";
export default function CreateShowTimeForm(props) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  var moment = require("moment");
  let [maPhim, setMaPhim] = useState();
  const layMaPhim = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };

  let [maHeThongRap, setMaHeThongRap] = useState();
  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };

  let [maCumRap, setMaCumRap] = useState();
  const layMaCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  let [gioChieu, setGioChieu] = useState();
  const layGioChieu = (event) => {
    let gioChieu = event.target.value;
    setGioChieu(gioChieu);
  };

  let [ngayChieu, setNgayChieu] = useState();
  const layNgayChieu = (event) => {
    let ngayChieu = moment(event.target.value).format("DD/MM/yyyy");
    setNgayChieu(ngayChieu);
  };

  let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;

  let [giaVe, setGiaVe] = useState();
  const layGiaVe = (event) => {
    let giaVe = parseInt(event.target.value);
    setGiaVe(giaVe);
  };

  let [maRap, setMaRap] = useState();
  const layMaRap = (event) => {
    let maRap = event.target.value;
    setMaRap(maRap);
  };

  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layThongTinCumRapTheoHeThong(maHeThongRap)
      .then((result) => {
        setCumRap(result.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }, [maHeThongRap]);

  const renderHinhAnhPhim = () => {
    return danhSachPhim.map((phim, index) => {
      if (maPhim === phim.maPhim) {
        return <img src={phim.hinhAnh} alt={phim.hinhAnh} key={index} />;
      } else {
        return null;
      }
    });
  };
  const renderPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <option value={phim.maPhim} key={index}>
          {phim.tenPhim}
        </option>
      );
    });
  };

  const renderHeThongRap = () => {
    return heThongRap?.map((heThongRap, index) => {
      return (
        <option value={heThongRap.maHeThongRap} key={index}>
          {heThongRap.tenHeThongRap}
        </option>
      );
    });
  };

  const renderCumRap = () => {
    return cumRap.map((item, index) => {
      return (
        <option value={item.maCumRap} key={index}>
          {item.tenCumRap}
        </option>
      );
    });
  };

  const renderRap = () => {
    return cumRap?.map((item) => {
      if (maCumRap === item.maCumRap) {
        return item.danhSachRap.map((rap, index) => {
          return (
            <option value={rap.maRap} key={index}>
              {rap.tenRap}
            </option>
          );
        });
      }
    });
  };

  const taoLichChieu = () => {
    let thongTinLichChieu = {
      maPhim: maPhim,
      ngayChieuGioChieu: ngayChieuGioChieu,
      maRap: maRap,
      giaVe: giaVe,
    };

    qLyAdminService
      .taoLichChieu(thongTinLichChieu)
      .then((res) => {
        swal({
          title: "Thêm lịch chiếu thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          // text: "Điền lại thông tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };
  return (
    <Fragment>
      <div className="container-fluid showtime-content">
        <div className="showtime-row row">
          <div className="left-col col-md-9 col-sm-12">
            <h2>Thêm lịch chiếu phim</h2>
            <form className="addshowtime-form">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="textb">
                    <select name="phim" onChange={layMaPhim} id="selection">
                      <option value="#">--Chọn phim--</option>
                      {renderPhim()}
                    </select>
                  </div>
                  <div className="textb">
                    <select
                      name="heThongRap"
                      onChange={layMaHeThongRap}
                      id="selection"
                    >
                      <option value="#">--Chọn hệ thống rạp--</option>
                      {renderHeThongRap()}
                    </select>
                  </div>
                  <div className="textb">
                    <select name="cumRap" onChange={layMaCumRap} id="selection">
                      <option value="#">--Chọn cụm rạp--</option>
                      {renderCumRap()}
                    </select>
                  </div>
                  <div className="textb">
                    <select name="rap" onChange={layMaRap} id="selection">
                      <option value="#">--Chọn rạp--</option>
                      {renderRap()}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="textb">
                    <input
                      type="date"
                      name="ngayChieu"
                      min="today"
                      onChange={layNgayChieu}
                      required
                    />
                    <div
                      className="placeholder"
                      style={{ left: "10px", top: "-20px" }}
                    >
                      Ngày Chiếu
                    </div>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="giochieu"
                      onChange={layGioChieu}
                      required
                    />
                    <div className="placeholder">Giờ chiếu (giờ:phút:giây)</div>
                  </div>
                  <div className="textb">
                    <select name="giave" onChange={layGiaVe} id="selection">
                      <option value="#">--Chọn giá vé--</option>
                      <option value="75000">75.000đ</option>
                      <option value="95000">90.000đ</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="btn fas fa-arrow-right"
              onClick={() => {
                swal({
                  title: "Tạo lịch chiếu này?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    taoLichChieu();
                  }
                });
              }}
            />
          </div>
          <div className="right-col col-md-3 col-sm-12">
            {renderHinhAnhPhim()}
          </div>
        </div>
      </div>
      <TableShowTimeList maPhim={maPhim} />
    </Fragment>
  );
}
