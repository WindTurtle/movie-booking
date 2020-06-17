import React, { useState, useEffect } from "react";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import { NavLink } from "react-router-dom";
import "../Movie/Movie.scss";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
export default function AllMovie() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  var moment = require("moment");
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });
  const renderDanhSachPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <div className="item__inrow col-md-3 mb-5">
          <div className="item__link" key={index}>
            <div className="item__img">
              <img
                style={{ height: 370 }}
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
              />
              <div className="overlay">
                <div
                  className="play__button"
                  // to={`/moviedetail/${phim.maPhim}`}
                  data-toggle="modal"
                  data-target={`#${"d" + phim.maPhim}`}
                >
                  <i className="fa fa-play play__icon" />
                </div>
              </div>
              <span className="film__age age--C">{phim.maNhom}</span>
              <span className="film__audit">
                <p className="film__point">8</p>
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
              </span>
            </div>
            <div className="item__info">
              <p className="film__name">{phim.tenPhim}</p>
              <span className="film__during">
                {moment(phim.ngayKhoiChieu).format("yy")}
              </span>
              <div className="item__button">
                <NavLink
                  className="btn buyTicket__button"
                  to={`/moviedetail/${phim.maPhim}`}
                >
                  ĐẶT VÉ
                </NavLink>
              </div>
            </div>
          </div>
          <ModalTrailer xemChiTiet={phim} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="search">
        <div id="wrap">
          <form action autoComplete="on">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Nhập tên phim cần tìm"
            />
            <input id="search_submit" defaultValue="Rechercher" type="submit" />
          </form>
        </div>
      </div>
      <div className="row">{renderDanhSachPhim()}</div>
    </div>
  );
}
