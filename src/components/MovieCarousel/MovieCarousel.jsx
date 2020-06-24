import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MovieCarousel.scss";
export default function MovieCarousel(props) {
  var moment = require("moment");
  let { danhSachPhim } = props;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const renderPhim = () => {
    return (
      <Slider {...settings}>
        {danhSachPhim.reverse().map((phim, index) => {
          return (
            <div className="item__inrow p-2 mb-2" key={index}>
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
        })}
      </Slider>
    );
  };
  return <Fragment>{renderPhim()} </Fragment>;
}
