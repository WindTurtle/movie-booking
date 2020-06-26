import React, { Fragment } from "react";
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
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://i0.wp.com/thegamehaus.com/wp-content/uploads/2020/05/Volibear_Emote.png?resize=256%2C256&ssl=1"
              alt="logo"
            />
            <span className="text-logo">AP Movie</span>
          </NavLink>
        </div>
        <div className="header__mobile">
          <div className="header__login">{renderLogin()}</div>
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
              <NavLink className="nav-link" to="/allmovie">
                Phim
              </NavLink>
            </li>
            <li className="nav-item">
              <i class="fa fa-project-diagram"></i>
              <NavLink className="nav-link" to="/clustercinema">
                Cụm Rạp
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
          <div className="header__login">{renderLogin()}</div>
        </div>
      </nav>
    </header>
  );
}
