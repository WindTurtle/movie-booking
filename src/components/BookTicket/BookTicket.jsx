import React, { useState, useEffect } from "react";
import "./BookTicket.scss";
import { NavLink } from "react-router-dom";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
export default function BookTicket(props) {
  let { danhSachPhim } = props;

  var moment = require("moment");
  let [thongTinPhim, setThongTinPhim] = useState([]);
  let [maPhim, setMaPhim] = useState({});
  let [maLichChieu, setMaLichChieu] = useState();
  let [maCumRap, setMaCumRap] = useState();
  var handleInput = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };
  var handleInputLichChieu = (event) => {
    let maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };

  var handleInputCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  const renderDatVe = () => {
    if (maLichChieu) {
      return (
        <NavLink to={`/booking/${maLichChieu}`}>
          <button className="btn-style draw-border">ĐẶT VÉ</button>
        </NavLink>
      );
    } else {
      return <button className="btn-style-disable">ĐẶT VÉ</button>;
    }
  };

  useEffect(() => {
    qLyPhimService
      .layThongTinPhim(maPhim)
      .then((result) => {
        setThongTinPhim(result.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }, [maPhim]);

  const renderDSPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <option value={phim.maPhim} key={index}>
          {phim.tenPhim}
        </option>
      );
    });
  };
  const renderCumRap = () => {
    return thongTinPhim.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap, index) => {
        return (
          <option value={cumRap.maCumRap} key={index}>
            {cumRap.tenCumRap}
          </option>
        );
      });
    });
  };

  const renderNgayChieu = () => {
    return thongTinPhim.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          return cumRap.lichChieuPhim.map((ngayChieu, index) => {
            return (
              <option value={ngayChieu.maLichChieu} key={index}>
                {moment(ngayChieu.ngayChieuGioChieu).format("DD-MM-yyyy")}
              </option>
            );
          });
        } else {
          return null;
        }
      });
    });
  };
  const renderGioChieu = () => {
    return thongTinPhim.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          return cumRap.lichChieuPhim?.map((ngayChieu, index) => {
            if (maLichChieu === ngayChieu.maLichChieu) {
              return (
                <option value={ngayChieu.maLichChieu} key={index}>
                  {moment(ngayChieu.ngayChieuGioChieu).format("hh:mm A")}
                </option>
              );
            }
          });
        }
      });
    });
  };

  return (
    <div className="bookMovie">
      <div className="row">
        <div id="movie__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="movie"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleInput}
            >
              <option value="DEFAULT">Chọn phim</option>
              {renderDSPhim()}
            </select>
          </div>
        </div>
        <div id="theater__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              onChange={handleInputCumRap}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">Chọn rạp</option>
              {renderCumRap()}
            </select>
          </div>
        </div>
        <div
          id="chooseday__dropdown"
          className="select__item col-md-2 col-xs-6"
        >
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              onChange={handleInputLichChieu}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">Chọn ngày</option>
              {renderNgayChieu()}
            </select>
          </div>
        </div>
        <div id="showtime__dropdown" className="select__item col-md-2 col-xs-6">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleInputLichChieu}
            >
              <option value="DEFAULT">Chọn giờ</option>
              {renderGioChieu()}
            </select>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 select__item button__form">
          {renderDatVe()}
        </div>
      </div>
    </div>
  );
}
