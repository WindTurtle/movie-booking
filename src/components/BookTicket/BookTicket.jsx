import React from "react";
import "./BookTicket.scss";
export default function BookTicket(props) {
  const renderDSPhim = () => {
    let { cumRap } = props;
    return cumRap.lstCumRap?.map((phim, index) => {
      return (
        <a className="dropdown-item" href="#" key={index}>
          {phim.tenPhim}
        </a>
      );
    });
  };
  return (
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
        <div className="dropdown-menu" aria-labelledby="moviedropdownMenuLink">
          {renderDSPhim()}
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
        <div className="dropdown-menu" aria-labelledby="daydropdownMenuLink">
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
  );
}
