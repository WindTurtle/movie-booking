import React, { Component, Fragment } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dangXuatAction } from "../../redux/actions/QuanLyNguoiDungActions";
export default function Header(props) {
  const taiKhoan = useSelector(
    (state) => state.QuanLyNguoiDungReducer.taiKhoan
  );

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(dangXuatAction());
  };
  const renderLogin = () => {
    if (taiKhoan) {
      return (
        <Fragment>
          <NavLink className="login__link" to="/profile">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="user" />
            <span className="login__text">{taiKhoan}</span>
          </NavLink>
          <span className="logOut__btn mr-2 text-light" onClick={LogOut}>
            Log out
          </span>
        </Fragment>
      );
    }
    return (
      <NavLink className="login__link" to="/login">
        <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="user" />
        <span className="login__text">Đăng Nhập</span>
      </NavLink>
    );
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src="https://i.ibb.co/DW6CgB6/logo3.png" alt="logo" />
          </NavLink>
        </div>
        <div className="header__mobile">
          <div className="header__login">
            {renderLogin()}
            <div id="province__dropdown" className="dropdown show d-inline">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-map-marker-alt dropdown__icon" />
                <span className="dropdown__text">Hồ Chí Minh</span>
                <i className="fa fa-angle-down" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#">
                  Biên Hòa
                </a>
                <a className="dropdown-item" href="#">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#">
                  Vũng Tàu
                </a>
                <a className="dropdown-item" href="#">
                  Quy Nhơn
                </a>
                <a className="dropdown-item" href="#">
                  Huế
                </a>
                <a className="dropdown-item" href="#">
                  Long Xuyên
                </a>
                <a className="dropdown-item" href="#">
                  Thái Nguyên
                </a>
                <a className="dropdown-item" href="#">
                  Buôn Mê Thuộc
                </a>
                <a className="dropdown-item" href="#">
                  Bắc Giang
                </a>
                <a className="dropdown-item" href="#">
                  Bến Tre
                </a>
                <a className="dropdown-item" href="#">
                  Việt Trì
                </a>
                <a className="dropdown-item" href="#">
                  Ninh Bình
                </a>
                <a className="dropdown-item" href="#">
                  Thái Bình
                </a>
                <a className="dropdown-item" href="#">
                  Vinh
                </a>
                <a className="dropdown-item" href="#">
                  Bảo Lộc
                </a>
                <a className="dropdown-item" href="#">
                  Đà Lạt
                </a>
                <a className="dropdown-item" href="#">
                  Trà Vinh
                </a>
                <a className="dropdown-item" href="#">
                  Yên Bái
                </a>
                <a className="dropdown-item" href="#">
                  Kiên Giang
                </a>
                <a className="dropdown-item" href="#">
                  Vĩnh Long
                </a>
                <a className="dropdown-item" href="#">
                  Cà Mau
                </a>
                <a className="dropdown-item" href="#">
                  Hậu Giang
                </a>
                <a className="dropdown-item" href="#">
                  Tây Ninh
                </a>
                <a className="dropdown-item" href="#">
                  Tuyên Quang
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <i className="fa fa-film"></i>
              <NavLink className="nav-link" to="/#listMovie">
                Phim
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-calendar-alt" />
              <NavLink className="nav-link" to="/#schedule">
                Lịch Chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-newspaper" />
              <NavLink className="nav-link" to="/#news">
                Tin Tức
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-mobile" />
              <NavLink className="nav-link" to="/#forMobile">
                Ứng dụng
              </NavLink>
            </li>
          </ul>
          <div className="header__login">
            {renderLogin()}
            <div id="province__dropdown" className="dropdown show d-inline">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-map-marker-alt dropdown__icon" />
                <span className="dropdown__text">Hồ Chí Minh</span>
                <i className="fa fa-angle-down" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#">
                  Biên Hòa
                </a>
                <a className="dropdown-item" href="#">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#">
                  Vũng Tàu
                </a>
                <a className="dropdown-item" href="#">
                  Quy Nhơn
                </a>
                <a className="dropdown-item" href="#">
                  Huế
                </a>
                <a className="dropdown-item" href="#">
                  Long Xuyên
                </a>
                <a className="dropdown-item" href="#">
                  Thái Nguyên
                </a>
                <a className="dropdown-item" href="#">
                  Buôn Mê Thuộc
                </a>
                <a className="dropdown-item" href="#">
                  Bắc Giang
                </a>
                <a className="dropdown-item" href="#">
                  Bến Tre
                </a>
                <a className="dropdown-item" href="#">
                  Việt Trì
                </a>
                <a className="dropdown-item" href="#">
                  Ninh Bình
                </a>
                <a className="dropdown-item" href="#">
                  Thái Bình
                </a>
                <a className="dropdown-item" href="#">
                  Vinh
                </a>
                <a className="dropdown-item" href="#">
                  Bảo Lộc
                </a>
                <a className="dropdown-item" href="#">
                  Đà Lạt
                </a>
                <a className="dropdown-item" href="#">
                  Trà Vinh
                </a>
                <a className="dropdown-item" href="#">
                  Yên Bái
                </a>
                <a className="dropdown-item" href="#">
                  Kiên Giang
                </a>
                <a className="dropdown-item" href="#">
                  Vĩnh Long
                </a>
                <a className="dropdown-item" href="#">
                  Cà Mau
                </a>
                <a className="dropdown-item" href="#">
                  Hậu Giang
                </a>
                <a className="dropdown-item" href="#">
                  Tây Ninh
                </a>
                <a className="dropdown-item" href="#">
                  Tuyên Quang
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
