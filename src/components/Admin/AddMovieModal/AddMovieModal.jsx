import React, { Component } from "react";
import "./AddMovieModal.scss";
import { groupID } from "../../../config/setting";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";
export default class AddMovieModal extends Component {
  state = {
    values: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      maNhom: groupID,
      danhGia: "",
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
    },
  };
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

    if (name === "maPhim") {
      let regexNumberic = /^[0-9]*$/;
      if (value.match(regexNumberic)) {
        newErrors.maPhim = "";
      } else {
        newErrors.maPhim = "Mã phim chỉ là số";
      }
    }
    if (name === "danhGia") {
      let regexNumberic = /^[0-9]*$/;
      if (value <= 10 && value >= 0 && value.match(regexNumberic)) {
        newErrors.danhGia = "";
      } else {
        newErrors.danhGia = "Chỉ được nhập số từ 1 tới 10";
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
      .themPhim(values)
      .then((res) => {
        swal({
          title: "Thêm phim thành công",
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

  render() {
    return (
      <div
        className="modal fade"
        id="addMovieModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addMovieModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addMovieModalTitle">
                Thêm phim
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
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="textb">
                      <input
                        type="text"
                        name="maPhim"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Mã phim</div>
                      <span className="text-danger">
                        {this.state.errors.maPhim}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="tenPhim"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Tên phim</div>
                      <span className="text-danger">
                        {this.state.errors.tenPhim}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="biDanh"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Bí danh</div>
                      <span className="text-danger">
                        {this.state.errors.biDanh}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="hinhAnh"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Hình ảnh</div>
                      <span className="text-danger">
                        {this.state.errors.hinhAnh}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="textb">
                      <input
                        type="text"
                        name="trailer"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Trailer</div>
                      <span className="text-danger">
                        {this.state.errors.trailer}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="moTa"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Mô tả</div>
                      <span className="text-danger">
                        {this.state.errors.moTa}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="ngayKhoiChieu"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Ngày khởi chiếu</div>
                      <span className="text-danger">
                        {this.state.errors.ngayKhoiChieu}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="danhGia"
                        onChange={this.handleChangeInput}
                        required
                      />
                      <div className="placeholder">Đánh giá</div>
                      <span className="text-danger">
                        {this.state.errors.danhGia}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn fas fa-arrow-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
