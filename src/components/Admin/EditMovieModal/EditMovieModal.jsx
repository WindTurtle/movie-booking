import React, { useState } from "react";
import "./EditMovieModal.scss";
import { groupID } from "../../../config/setting";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";
import { Fragment } from "react";
export default function EditMovieModal(props) {
  let { phim } = props;
  let [state, setState] = useState({
    values: {
      hinhAnh: phim.hinhAnh,
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      biDanh: phim.biDanh,
      trailer: phim.trailer,
      moTa: phim.moTa,
      ngayKhoiChieu: phim.ngayKhoiChieu,
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

  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    var moment = require("moment");
    //tạo ra object this.state.values mới
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    // if (name === "hinhAnh") {
    //   newValues[name] = event.target.files[0];
    // }
    if (name === "ngayKhoiChieu") {
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
    // var form_data = new FormData();
    // for (let key in state.values) {
    //   form_data.append(key, state.values[key]);
    // }
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

  const renderModal = () => {
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
              <form onSubmit={handleSubmit} className="user-form">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="textb">
                      <input
                        type="text"
                        name="maPhim"
                        className="text-secondary"
                        onChange={handleChangeInput}
                        disabled
                        value={state.values.maPhim}
                        style={{ cursor: "no-drop" }}
                        required
                      />
                      <div
                        className="placeholder"
                        style={{ left: "10px", top: "-15px" }}
                      >
                        Mã phim
                      </div>
                      <span className="text-danger">{state.errors.maPhim}</span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="tenPhim"
                        onChange={handleChangeInput}
                        value={state.values.tenPhim}
                        required
                      />
                      <div className="placeholder">Tên phim</div>
                      <span className="text-danger">
                        {state.errors.tenPhim}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="biDanh"
                        onChange={handleChangeInput}
                        value={state.values.biDanh}
                        required
                      />
                      <div className="placeholder">Bí danh</div>
                      <span className="text-danger">{state.errors.biDanh}</span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="hinhAnh"
                        onChange={handleChangeInput}
                        value={state.values.hinhAnh}
                        required
                      />
                      {/* <div>Thêm hình ảnh mới nếu có</div>
                      <input
                        type="file"
                        name="hinhAnh"
                        onChange={this.handleChangeInput}
                        ref={this.state.values.hinhAnh}
                      /> */}
                      <div className="placeholder">Hình ảnh</div>
                      <span className="text-danger">
                        {state.errors.hinhAnh}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="textb">
                      <input
                        type="text"
                        name="trailer"
                        onChange={handleChangeInput}
                        value={state.values.trailer}
                        required
                      />
                      <div className="placeholder">Trailer</div>
                      <span className="text-danger">
                        {state.errors.trailer}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="moTa"
                        onChange={handleChangeInput}
                        value={state.values.moTa}
                        required
                      />
                      <div className="placeholder">Mô tả</div>
                      <span className="text-danger">{state.errors.moTa}</span>
                    </div>
                    <div className="textb">
                      <input
                        type="date"
                        name="ngayKhoiChieu"
                        onChange={handleChangeInput}
                        // value={state.values.ngayKhoiChieu}
                        required
                      />
                      <div
                        className="placeholder"
                        style={{ left: "10px", top: "-15px" }}
                      >
                        Ngày khởi chiếu
                      </div>
                      <span className="text-danger">
                        {state.errors.ngayKhoiChieu}
                      </span>
                    </div>
                    <div className="textb">
                      <input
                        type="text"
                        name="danhGia"
                        onChange={handleChangeInput}
                        value={state.values.danhGia}
                        required
                      />
                      <div className="placeholder">Rating</div>
                      <span className="text-danger">
                        {state.errors.danhGia}
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
  return <Fragment>{renderModal()}</Fragment>;
}
