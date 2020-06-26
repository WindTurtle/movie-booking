import React, { Component, Fragment } from "react";
import "./EditUserModal.scss";
import { groupID } from "../../../config/setting";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";

export default class EditUserModal extends Component {
  state = {
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: groupID,
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
    },
  };

  componentDidMount() {
    let { user } = this.props;
    this.setState({
      values: {
        hoTen: user.hoTen,
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        email: user.email,
        soDT: user.soDt,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        maNhom: groupID,
      },
      errors: {
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
      },
    });
  }
  handleChangeInput = (event) => {
    var { value, name } = event.target;

    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail = "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
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
    qLyAdminService
      .capNhatThongTinNguoiDung(values)
      .then((res) => {
        swal({
          title: "Sửa thành công",
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
  renderModal = () => {
    let { user } = this.props;
    return (
      <div
        className="editUserModal modal fade"
        id={`d1${user.taiKhoan}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="EditModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditModalTitle">
                Sửa thông tin người dùng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit} className="user-form">
                <div className="textb">
                  <input
                    type="text"
                    name="taiKhoan"
                    className="text-secondary"
                    onChange={this.handleChangeInput}
                    value={this.state.values.taiKhoan}
                    disabled
                    style={{ cursor: "no-drop" }}
                    required
                  />
                  <div
                    className="placeholder"
                    style={{ left: "10px", top: "-15px" }}
                  >
                    Tài khoản
                  </div>
                  <span className="text-danger">
                    {this.state.errors.taiKhoan}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="password"
                    name="matKhau"
                    onChange={this.handleChangeInput}
                    value={this.state.values.matKhau}
                    required
                  />
                  <div className="placeholder">Mật khẩu</div>
                  <span className="text-danger">
                    {this.state.errors.matKhau}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="hoTen"
                    onChange={this.handleChangeInput}
                    value={this.state.values.hoTen}
                    required
                  />
                  <div className="placeholder">Họ tên</div>
                  <span className="text-danger">{this.state.errors.hoTen}</span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChangeInput}
                    value={this.state.values.email}
                    required
                  />
                  <div className="placeholder">Email</div>
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="soDT"
                    onChange={this.handleChangeInput}
                    value={this.state.values.soDT}
                    required
                  />
                  <div className="placeholder">Số điện thoại</div>
                  <span className="text-danger">{this.state.errors.soDT}</span>
                </div>
                <div className="textb">
                  <select
                    name="maLoaiNguoiDung"
                    onChange={this.handleChangeInput}
                    id="loaiNguoiDung"
                    value={this.state.values.maLoaiNguoiDung}
                  >
                    <option value="#">--Chọn loại người dùng--</option>
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </select>
                  <span className="text-danger">
                    {this.state.errors.maLoaiNguoiDung}
                  </span>
                </div>
                <button className="btn fa fa-check" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <Fragment>{this.renderModal()}</Fragment>;
  }
}
