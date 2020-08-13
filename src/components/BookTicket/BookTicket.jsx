import React, { useState, useEffect } from "react";
import "./BookTicket.scss";
import { NavLink } from "react-router-dom";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
export default function BookTicket() {
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
  var moment = require("moment");
  let [thongTinPhim, setThongTinPhim] = useState([]);
  let [maPhim, setMaPhim] = useState({});
  let [maLichChieu, setMaLichChieu] = useState();
  let [maCumRap, setMaCumRap] = useState();
  let [ngayChieu, setNgayChieu] = useState();
  var handleInput = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };
  var handleInputLichChieu = (event) => {
    let maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };
  var handleInputNgayChieu = (event) => {
    let ngayChieu = event.target.value;
    setNgayChieu(ngayChieu);
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

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[moment(currentValue[key]).format("yyyy-MM-DD")] =
        result[moment(currentValue[key]).format("yyyy-MM-DD")] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };
  const renderNgayChieu = () => {
    return thongTinPhim.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([value], i) => {
            return (
              <option value={value} key={i}>
                {moment(value).format("DD-MM-yyyy")}
              </option>
            );
          });
          return dataLayout;
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
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([index, value], i) => {
            return value.map((item) => {
              if (ngayChieu === index) {
                return (
                  <option value={item.maLichChieu} key={i}>
                    {moment(item.ngayChieuGioChieu).format("hh:mm A")}
                  </option>
                );
              } else {
                return null;
              }
            });
          });
          return dataLayout;
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
              onChange={handleInputNgayChieu}
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
