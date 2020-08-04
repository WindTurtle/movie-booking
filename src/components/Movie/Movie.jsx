import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Movie/Movie.scss";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
export default function AllMovie() {
  var moment = require("moment");
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [danhSachPhimSearch, setDanhSachPhimSearch] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = danhSachPhim.filter((phim) => {
      return phim.tenPhim.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDanhSachPhimSearch(results);
  }, [searchTerm, danhSachPhim]);

  const renderDanhSachPhim = () => {
    return danhSachPhimSearch.map((phim, index) => {
      return (
        <div className="movie-card col-md-6 col-sm-12" key={index}>
          <NavLink className="card-link" to={`/moviedetail/${phim.maPhim}`}>
            <div className="card-content">
              <div className="content-left">
                <div className="left-header-movie">
                  <h1 className="movie-name">{phim.tenPhim}</h1>
                  <h4 className="group-id">{phim.maNhom}</h4>
                  <p className="during-time">120 phút</p>
                  <p className="date-time">
                    {moment(phim.ngayKhoiChieu).format("DD-MM-yyyy")}
                  </p>
                </div>
                <div className="below-header">
                  <p className="description">{phim.moTa}</p>
                </div>
              </div>
              <LazyLoad throttle={200}>
                <CSSTransition
                  key="1"
                  transitionName="fade"
                  transitionAppear
                  transitionAppearTimeout={1000}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <div
                    className="content-right"
                    style={{ backgroundImage: `url(${phim.hinhAnh})` }}
                  ></div>
                </CSSTransition>
              </LazyLoad>
            </div>
          </NavLink>
          <div
            className="play-trailer"
            data-toggle="modal"
            data-target={`#${"d" + phim.maPhim}`}
          >
            <i className="play-icon fa fa-play"></i>
          </div>
          <ModalTrailer xemChiTiet={phim} />
        </div>
      );
    });
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <div className="container all-movie">
        <div className="search">
          <div id="wrap">
            <form autoComplete="on">
              <input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Nhập tên phim cần tìm"
              />
              <input
                id="search_submit"
                defaultValue="Rechercher"
                type="submit"
              />
            </form>
          </div>
        </div>
        <div className="row movielist-content">{renderDanhSachPhim()}</div>
      </div>
    );
  }
}
