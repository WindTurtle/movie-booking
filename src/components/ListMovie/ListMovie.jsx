import React, { useState, useEffect } from "react";
import "../ListMovie/ListMovie.scss";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import { NavLink } from "react-router-dom";
export default function ListMovie(props) {
  var moment = require("moment");
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  const renderDanhSachPhim = (start, end) => {
    return danhSachPhim?.slice(start, end).map((phim, index) => {
      return (
        <div className="item__inrow mb-5 col-md-3 col-xs-12" key={index}>
          <div className="item__link">
            <div className="item__img">
              <img
                style={{ height: 270 }}
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
              />
              <div className="overlay">
                <NavLink
                  className="play__button"
                  to={`/moviedetail/${phim.maPhim}`}
                >
                  <i className="fa fa-play play__icon" />
                </NavLink>
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
        </div>
      );
    });
  };
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
  return (
    <div id="listMovie" className="listMovie">
      <div className="container">
        <div id="listMovieTab">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-dangchieu"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-sapchieu"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Sắp Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-dangchieu"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div
                id="myNowMovieCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row__content row">
                      {renderDanhSachPhim(0, 4)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row">
                      {renderDanhSachPhim(5, 9)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row">
                      {renderDanhSachPhim(10, 14)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row">
                      {renderDanhSachPhim(15, 19)}
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myNowMovieCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i
                    className="fa fa-chevron-left carousel__button"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myNowMovieCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i
                    className="fa fa-chevron-right carousel__button"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-sapchieu"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div id="myCommingSoonMovieCarousel" className="carousel slide">
                {/* data-ride="carousel" */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row__content row__above row">
                      {renderDanhSachPhim(10, 14)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row__above row">
                      {renderDanhSachPhim(5, 9)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row__above row">
                      {renderDanhSachPhim(0, 4)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row__content row__above row">
                      {renderDanhSachPhim(15, 19)}
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCommingSoonMovieCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i
                    className="fa fa-chevron-left carousel__button"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCommingSoonMovieCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i
                    className="fa fa-chevron-right carousel__button"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
