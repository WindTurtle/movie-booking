import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MovieCarousel.scss";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function MovieCarousel() {
  var moment = require("moment");
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        if (result) {
          setLoading(false);
        }
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

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
    if (loading) {
      return (
        <Slider style={{ position: "relative" }} {...settings}>
          {danhSachPhim.map(() => {
            return (
              <div className="item__inrow p-2 mb-2">
                <div className="item__link">
                  <div className="item__img">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                      <Skeleton height={290} />
                    </SkeletonTheme>
                    <SkeletonTheme color="#202020" highlightColor="#444">
                      <span className="film__age">
                        <Skeleton />
                      </span>
                    </SkeletonTheme>
                  </div>
                  <div className="item__info">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                      <p className="film__name">
                        <Skeleton />
                      </p>
                    </SkeletonTheme>
                    <SkeletonTheme color="#202020" highlightColor="#444">
                      <span className="film__during">
                        <Skeleton />
                      </span>
                    </SkeletonTheme>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      );
    } else {
      return (
        <Slider {...settings}>
          {danhSachPhim.reverse().map((phim, index) => {
            return (
              <div className="item__inrow" key={index}>
                <div className="item__link">
                  <div className="item__img">
                    <img src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="overlay">
                      <NavLink
                        className="play__button"
                        to={`/moviedetail/${phim.maPhim}`}
                      >
                        <i className="fa fa-info play__icon" />
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
                    <p className="film__name">{phim.tenPhim || <Skeleton />}</p>
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
    }
  };
  return renderPhim();
}
