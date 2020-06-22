import React, { Component } from "react";
import "./EditMovieModal.scss";
import { groupID } from "../../../config/setting";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";
import { Fragment } from "react";

export default class EditMovieModal extends Component {
  state = {
    values: {
      hinhAnh: {},
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
      maNhom: groupID,
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      maNhom: "",
      danhGia: "",
    },
  };

  componentDidMount() {
    let { phim } = this.props;
    var moment = require("moment");
    this.setState({
      values: {
        hinhAnh: phim.hinhAnh,
        maPhim: phim.maPhim,
        tenPhim: phim.tenPhim,
        biDanh: phim.biDanh,
        trailer: phim.trailer,
        moTa: phim.moTa,
        ngayKhoiChieu: moment(phim.ngayKhoiChieu).format("DD/MM/yy"),
        danhGia: phim.danhGia,
        maNhom: groupID,
      },
      errors: {
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        hinhAnh: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        maNhom: "",
        danhGia: "",
      },
    });
  }

  handleChangeInput = (event) => {
    var { value, name } = event.target;
    var moment = require("moment");
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "ngayKhoiChieu") {
      // console.log(value);
      newValues[name] = moment(value, "yyyy-MM-DD").format("DD/MM/yyyy");
    }
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
    this.setState({ values: newValues, errors: newErrors });
    console.log(this.state);
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
      .suaPhim(values)
      .then((res) => {
        swal({
          title: "Sửa phim thành công",
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
    let { phim } = this.props;
    return (
      <div
        className="editMovieModal modal fade"
        id={`d${phim.maPhim}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editMovieModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editMovieModalTitle">
                Sửa phim
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
                        className="text-secondary"
                        onChange={this.handleChangeInput}
                        disabled
                        value={this.state.values.maPhim}
                        style={{ cursor: "no-drop" }}
                        required
                      />
                      <div
                        className="placeholder"
                        style={{ left: "10px", top: "-15px" }}
                      >
                        Mã phim
                      </div>
                      <span className="text-danger">
                        {this.state.errors.maPhim}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="tenPhim"
                        onChange={this.handleChangeInput}
                        value={this.state.values.tenPhim}
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
                        value={this.state.values.biDanh}
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
                        value={this.state.values.hinhAnh}
                        required
                      />
                      {/* <input
                      type="file"
                      name="hinhAnh"
                      onChange={this.handleChangeInput}
                    ></input> */}
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
                        value={this.state.values.trailer}
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
                        value={this.state.values.moTa}
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
                        value={this.state.values.ngayKhoiChieu}
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
                        value={this.state.values.danhGia}
                        required
                      />
                      <div className="placeholder">Rating</div>
                      <span className="text-danger">
                        {this.state.errors.danhGia}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn fas fa-check" />
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
