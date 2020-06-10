import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Register/Register.scss";
export default class Register extends Component {
  state = {
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };

    //set trường hợp rỗng
    //tạo ra object this.state.errors mới
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail = /^[a-z][a-z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    //setState lại values và errors
    this.setState({ values: newValues, errors: newErrors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        // kiểm tra lỗi
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("thông tin không hợp lệ");
      return;
    }
    // gọi api hoạc dispatch redux
  };

  render() {
    return (
      <section className="backgroundBody">
        <div className="container-fluid">
          <div className="registerForm">
            <div className="img__logo">
              <NavLink className="img__link" to="/">
                <img src="https://i.ibb.co/DW6CgB6/logo3.png" />
              </NavLink>
            </div>
            <div className="formSocial">
              <form className="formRegister" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    className="input"
                    name="taiKhoan"
                    placeholder="Tên tài khoản"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.taiKhoan}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.matKhau}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="hoTen"
                    type="text"
                    placeholder="Họ tên"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.hoTen}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="soDT"
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.soDienThoai}
                  </span>
                </div>
                <div className="form-group">
                  <button className="btnLogin" type="submit">
                    Đăng ký
                  </button>
                </div>
                <div className="form-group">
                  <NavLink className="text-light" to="/login">
                    Bạn đã có tài khoản?
                  </NavLink>
                </div>
              </form>
            </div>
            <NavLink className="close__btn" to="/"></NavLink>
          </div>
        </div>
      </section>
    );
  }
}
