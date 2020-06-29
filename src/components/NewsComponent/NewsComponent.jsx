import React, { Fragment } from "react";
import "./NewsComponent.scss";
import { NavLink } from "react-router-dom";
export default function NewsComponent(props) {
  let { danhSachTinTuc } = props;
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
                {tinTuc.title}
              </NavLink>
            </h2>
            <p className="items__text-description">{tinTuc.description1}</p>
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
