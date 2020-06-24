import React from "react";
import "../Carousel/Carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BookTicket from "../BookTicket/BookTicket";

export default function Carousel(props) {
  let { danhSachPhim } = props;
  return (
    <div className="hotMovie">
      <div className="hotMovie__content">
        <OwlCarousel
          loop
          nav
          autoplay
          items={1}
          className="myHotMovieCarousel owl-carousel owl-theme"
        >
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/05/tunnel-15906774078880.png"
                atl="img1"
              />
              <div
                className="background__overlay"
                // data-toggle="modal"
                // data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/05/boogey-15906772704394.png"
                atl="img2"
              />
              <div
                className="background__overlay"
                // data-toggle="modal"
                // data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/05/nang-3-15894691284433.png"
                atl="img3"
              />
              <div
                className="background__overlay"
                // data-toggle="modal"
                // data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                atl="11"
                src="https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png"
                atl="img4"
              />
              <div
                className="background__overlay"
                // data-toggle="modal"
                // data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                atl="11"
                src="https://s3img.vcdn.vn/123phim/2020/05/duong-ham-sinh-tu-15899693071981.png"
                atl="img5"
              />
              <div
                className="background__overlay"
                // data-toggle="modal"
                // data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      <BookTicket danhSachPhim={danhSachPhim} />
    </div>
  );
}
