import React from "react";
import "../MovieInfo/MovieInfo.scss";
import ModalTrailer from "../../ModalTrailer/ModalTrailer";

export default function MovieInfo(props) {
  let { phim } = props;
  var moment = require("moment");
  const renderStar = (rating) => {
    if (rating > 5) rating = 5;
    var content = [];
    for (let i = 0; i < rating; i++) {
      var star = [];
      star.push(<i class="fa fa-star"></i>);
      content.push(star);
    }
    for (let i = 0; i < 5 - rating; i++) {
      var star = [];
      star.push(<i class="fa fa-star"></i>);
      content.push(star);
    }
    return content;
  };
  const countRatingMark = (rating) => {
    return rating * 0.5 + 10 * 0.5;
  };
  return (
    <section className="movieInfo">
      <div className="full__background">
        <img
          src={phim.hinhAnh}
          alt={phim.hinhAnh}
          style={{ height: "450px" }}
        />
        <div className="overlay__gradient" />
        <div className="play__mobile">
          <i className="fa fa-play" />
        </div>
        <div className="rating__point">
          <p className="film__point">{countRatingMark(phim.danhGia)}</p>
          <div className="rating__stars">{renderStar(phim.danhGia)}</div>
        </div>
      </div>
      <div className="form__info container-fluid">
        <div className="row">
          <div className="movie__poster col-3">
            <div className="poster__img">
              <img
                style={{ width: 220, height: 300 }}
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
              />
              <div
                className="play__btn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play" />
              </div>
            </div>
          </div>
          <div className="movie__info col-6">
            <div className="showtime">
              {moment(phim.ngayKhoiChieu).format("DD-MM-yy")}
            </div>
            <span className="age--C">{phim.maNhom}</span>
            <span className="name">{phim.tenPhim}</span>
            <p className="during">120 phút</p>
            <a href="#movieTheater">
              <button className="bookTicket-btn">Mua Vé</button>
            </a>
          </div>
          <div className="movie__rating col-2">
            <div className="rating__point">
              {countRatingMark(phim.danhGia)}
              <div className="vongtronxanh"></div>
            </div>
            <div className="rating__stars">{renderStar(phim.danhGia)}</div>
            <div className="rating__text">{phim.danhGia} người đánh giá</div>
          </div>
        </div>
      </div>
      <div className="film__infoMobile">
        <div className="days">
          {moment(phim.ngayKhoiChieu).format("DD-MM-yy")}
        </div>
        <div className="name">{phim.tenPhim}</div>
        <div className="during">120 phút</div>
      </div>
      <ModalTrailer xemChiTiet={phim} />
    </section>
  );
}
