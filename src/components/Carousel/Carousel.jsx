import React, { Component } from "react";
import "../Carousel/Carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Carousel extends Component {
  render() {
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
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
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
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
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
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
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
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
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
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  <i className="fa fa-play carousel__button" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="bookMovie">
          <div id="movie__dropdown" className="dropdown show d-inline">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="moviedropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="dropdown__text">Phim</span>
              <i className="fa fa-angle-down dropdown__icon" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="moviedropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Kẻ Vô Hình - The Invisible Man (C18)
              </a>
              <a className="dropdown-item" href="#">
                Nắng 3: Lời Hứa Của Cha (C16)
              </a>
              <a className="dropdown-item" href="#">
                Sở Thú Thoát Ế - Secret Zoo (C13)
              </a>
              <a className="dropdown-item" href="#">
                Tiếng Gọi Nơi Hoang Dã - The Call of the Wild
              </a>
              <a className="dropdown-item" href="#">
                Sát Thủ Vô Cùng Cực - Hitman: Agent Jun (C18)
              </a>
              <a className="dropdown-item" href="#">
                Ngôi Làng Tử Khí - Howling Village (C18)
              </a>
              <a className="dropdown-item" href="#">
                Thí Nghiệm Xác Sống - Patients of A Saint (C18)
              </a>
              <a className="dropdown-item" href="#">
                Birds of Prey: Cuộc Lột Xác Huy Hoàng Của Harley Quinn (C18)
              </a>
            </div>
          </div>
          <div id="theater__dropdown" className="dropdown show d-inline">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="theaterdropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="dropdown__text">Rạp</span>
              <i className="fa fa-angle-down dropdown__icon" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="theaterdropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                BHD Star Bitexco
              </a>
              <a className="dropdown-item" href="#">
                BHD Star Vincom 3/2
              </a>
              <a className="dropdown-item" href="#">
                BHD Star Vincom Lê Văn Việt
              </a>
              <a className="dropdown-item" href="#">
                CGV Aeon Bình Tân
              </a>
              <a className="dropdown-item" href="#">
                CGV Crescent Mall
              </a>
              <a className="dropdown-item" href="#">
                CGV Vincom Center Landmark 81
              </a>
              <a className="dropdown-item" href="#">
                CineStar Hai Bà Trưng
              </a>
              <a className="dropdown-item" href="#">
                Galaxy - Nguyễn Du
              </a>
              <a className="dropdown-item" href="#">
                Lotte Cinema Cantavil
              </a>
            </div>
          </div>
          <div id="chooseday__dropdown" className="dropdown show d-inline">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="daydropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="dropdown__text">Ngày xem</span>
              <i className="fa fa-angle-down dropdown__icon" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="daydropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                <span className="dotw">Hôm nay</span>
                <span className="days">2020-03-03</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Ngày mai</span>
                <span className="days">2020-03-04</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Thứ năm</span>
                <span className="days">2020-03-05</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Thứ sáu</span>
                <span className="days">2020-03-06</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Thứ bảy</span>
                <span className="days">2020-03-07</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Chủ nhật</span>
                <span className="days">2020-03-08</span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="dotw">Thứ hai</span>
                <span className="days">2020-03-09</span>
              </a>
            </div>
          </div>
          <div id="showtime__dropdown" className="dropdown show d-inline">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="showtimedropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="dropdown__text">Suất chiếu</span>
              <i className="fa fa-angle-down dropdown__icon" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="showtimedropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                11:00
              </a>
              <a className="dropdown-item" href="#">
                12:30
              </a>
              <a className="dropdown-item" href="#">
                13:00
              </a>
              <a className="dropdown-item" href="#">
                13:30
              </a>
              <a className="dropdown-item" href="#">
                14:00
              </a>
              <a className="dropdown-item" href="#">
                14:20
              </a>
              <a className="dropdown-item" href="#">
                15:00
              </a>
              <a className="dropdown-item" href="#">
                21:00
              </a>
              <a className="dropdown-item" href="#">
                22:30
              </a>
            </div>
          </div>
          <button id="bookTicketButton" className="btn">
            ĐẶT VÉ NGAY
          </button>
        </div>
      </div>
    );
  }
}
