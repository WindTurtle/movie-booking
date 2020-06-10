import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Login/Login.scss";
import { useDispatch } from "react-redux";
import { userLogin, token } from "../../config/setting";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
const Login = (props) => {
  let { thongTin } = props;
  const dispatch = useDispatch();
  let [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = { ...state.values, [name]: value };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống!" : "",
    };
    setState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    qlyNguoiDung
      .dangNhap(state.values)
      .then((res) => {
        localStorage.setItem(userLogin, JSON.stringify(res.data));
        localStorage.setItem(token, res.data.accessToken);
        dispatch(dangNhapAction(res.data.taiKhoan));
        thongTin.history.push("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div>
      <section className="backgroundBody">
        <div className="container-fluid">
          <div className="loginForm">
            <NavLink className="img__link" to="/">
              <div className="img__logo">
                <img src="https://i.ibb.co/DW6CgB6/logo3.png" />
              </div>
            </NavLink>
            <div className="formMessage">
              Đăng nhập để được nhiều ưu đãi, mua vé
              <br />
              và bảo mật thông tin!
            </div>
            <div className="formSocial">
              <form className="formLogin" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="input"
                    name="taiKhoan"
                    placeholder="Tài khoản"
                    onChange={handleChangeInput}
                  />
                  <span className="text-danger">{state.errors.taiKhoan}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={handleChangeInput}
                  />
                  <span className="text-danger">{state.errors.matKhau}</span>
                </div>
                <div className="form-group">
                  <button className="btnLogin" type="submit">
                    Đăng nhập
                  </button>
                </div>
                <div className="form-group">
                  <NavLink className="text-light" to="/register">
                    Bạn chưa có tài khoản?
                  </NavLink>
                </div>
              </form>
            </div>
            <NavLink className="close__btn" to="/"></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
