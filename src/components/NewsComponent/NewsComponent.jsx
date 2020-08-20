import React, { useState, useEffect, Fragment } from "react";
import "./NewsComponent.scss";
import { NavLink } from "react-router-dom";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function NewsComponent() {
  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((res) => {
        setDanhSachTinTuc(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  var moment = require("moment");
  const renderTinTuc = () => {
    return danhSachTinTuc.map((tinTuc, index) => {
      return (
        <div className="news__items" key={index}>
          <div className="items__img">
            <img src={tinTuc.image1} alt={tinTuc.image1} />
          </div>
          <div className="items__text">
            <h2 className="items__text-title">
              <NavLink
                className="items__text-link"
                to={`/detailnews/${tinTuc.id}`}
              >
                {tinTuc.title || (
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2>
                      <Skeleton count={3} duration={2} />
                    </h2>
                  </SkeletonTheme>
                )}
              </NavLink>
            </h2>
            ;<p className="items__text-description">{tinTuc.description1}</p>
            <div className="items__text-author">
              {tinTuc.author}
              <span className="items__text-days">
                {moment(tinTuc.dayupload).format("hh:mm DD/MM/yyyy")}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderTinTucHot = () => {
    return danhSachTinTuc.reverse().map((tinTuc, index) => {
      return (
        <div className="news__items" key={index}>
          <div className="items__img">
            <img src={tinTuc.image2} alt={tinTuc.image2} />
          </div>
          <div className="items__text">
            <h5 className="items__text-title">
              <NavLink
                className="items__text-link"
                to={`/detailnews/${tinTuc.id}`}
              >
                {tinTuc.title}
              </NavLink>
            </h5>
          </div>
        </div>
      );
    });
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <Fragment>
        <div className="news__header">
          <div className="overlay">
            <div className="title__description">
              Tin tức phim mới nhất về những bộ phim mà bạn quan tâm nhất.
            </div>
          </div>
        </div>
        <div className="news__container container">
          <div className="news__content row">
            <div className="news__left col-md-9 col-sm-12">
              <h3 className="news__title">Tin mới</h3>
              {renderTinTuc()}
            </div>
            <div className="news__right col-md-3 col-sm-12">
              <h3 className="news__title">Tin hot</h3>
              {renderTinTucHot()}
            </div>
          </div>
          <div className="readMore">
            <button className="btn__readmore">Xem Thêm</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
