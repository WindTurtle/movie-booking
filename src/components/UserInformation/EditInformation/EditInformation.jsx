import React, { useState, useEffect } from "react";
import { userLogin } from "../../../config/setting";
import swal from "sweetalert";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
export default function EditInformation() {
  const info = JSON.parse(localStorage.getItem(userLogin));
  let [account] = useState({
    taiKhoan: info.taiKhoan,
  });
  let [state, setState] = useState({
    values: {
      hoTen: "",
      taiKhoan: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: "",
      matKhau: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
  });
  useEffect(() => {
    qlyNguoiDung
      .thongTinTaiKhoan(account)
      .then((res) => {
        setState({
          values: res.data,
          errors: {
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDT: "",
          },
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [account]);

  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail =
        "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    setState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = state;
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

    let infoUserUpdate = {
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      hoTen: values.hoTen,
      email: values.email,
      soDT: values.soDT,
      maNhom: values.maNhom,
      maLoaiNguoiDung: info.maLoaiNguoiDung,
    };
    qLyAdminService
      .capNhatThongTinNguoiDung(infoUserUpdate)
      .then((res) => {
        swal({
          title: "Sửa thông tin thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Điền lại thông tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <h4 className="text-dark" style={{ textDecoration: "none" }}>
              Chỉnh sửa thông tin cá nhân
            </h4>
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div className="card-body">
          <form className="formRegister" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="input"
                name="taiKhoan"
                placeholder="Tên tài khoản"
                value={state.values.taiKhoan}
                onChange={handleChangeInput}
                disabled
              />
              <span className="text-danger">{state.errors.taiKhoan}</span>
            </div>
            <div className="form-group">
              <input
                className="input"
                name="matKhau"
                type="password"
                placeholder="Mật khẩu"
                value={state.values.matKhau}
                onChange={handleChangeInput}
              />
              <span className="text-danger">{state.errors.matKhau}</span>
            </div>
            <div className="form-group">
              <input
                className="input"
                name="hoTen"
                type="text"
                placeholder="Họ tên"
                value={state.values.hoTen}
                onChange={handleChangeInput}
              />
              <span className="text-danger">{state.errors.hoTen}</span>
            </div>
            <div className="form-group">
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={state.values.email}
                onChange={handleChangeInput}
              />
              <span className="text-danger">{state.errors.email}</span>
            </div>
            <div className="form-group">
              <input
                className="input"
                name="soDT"
                type="text"
                placeholder="Số điện thoại"
                value={state.values.soDT}
                onChange={handleChangeInput}
              />
              <span className="text-danger">{state.errors.soDienThoai}</span>
            </div>
            <div className="form-group">
              <button
                className="btnChange btn-block"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#60c5ef",
                  borderRadius: "5px",
                  padding: "15px",
                }}
              >
                Thay đổi thông tin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
