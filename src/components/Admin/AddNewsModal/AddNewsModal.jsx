import React from "react";
import "./AddNewsModal.scss";
import { useState } from "react";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";
export default function AddNewsModal() {
  let [state, setState] = useState({
    values: {
      title: "",
      description1: "",
      description2: "",
      description3: "",
      image1: "",
      image2: "",
      image3: "",
      author: "",
      dayupload: "",
      likes: "",
      shares: "",
    },
    errors: {
      title: "",
      description1: "",
      description2: "",
      description3: "",
      image1: "",
      image2: "",
      image3: "",
      author: "",
      dayupload: "",
      likes: "",
      shares: "",
    },
  });
  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    setState({ values: newValues, errors: newErrors });
    console.log(state);
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
    } else {
      qLyAdminService
        .themTinTuc(values)
        .then((res) => {
          swal({
            title: "Thêm tin thành công",
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
    }
  };
  return (
    <div
      className="modal fade"
      id="addNewsModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="addNewsModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addNewsModalTitle">
              Thêm tin tức
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
                      name="title"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Tựa đề</div>
                    <span className="text-danger">
                      {/* {this.state.errors.hinhAnh} */}
                    </span>
                  </div>
                  <div className="textb">
                    <textarea
                      type="text"
                      name="description1"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Mô tả 1</div>
                    <span className="text-danger">
                      {/* {this.state.errors.maPhim} */}
                    </span>
                  </div>
                  <div className="textb">
                    <textarea
                      type="text"
                      name="description2"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Mô tả 2</div>
                    <span className="text-danger">
                      {/* {this.state.errors.tenPhim} */}
                    </span>
                  </div>
                  <div className="textb">
                    <textarea
                      type="text"
                      name="description3"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Mô tả 3</div>
                    <span className="text-danger">
                      {/* {this.state.errors.tenPhim} */}
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="textb">
                    <input
                      type="text"
                      name="image1"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Hình ảnh 1</div>
                    <span className="text-danger">
                      {/* {this.state.errors.trailer} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="image2"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Hình ảnh 2</div>
                    <span className="text-danger">
                      {/* {this.state.errors.trailer} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="image3"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Hình ảnh 3</div>
                    <span className="text-danger">
                      {/* {this.state.errors.trailer} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="author"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Người đăng</div>
                    <span className="text-danger">
                      {/* {this.state.errors.trailer} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="date"
                      name="dayupload"
                      onChange={handleChangeInput}
                      required
                    />
                    <div
                      className="placeholder"
                      style={{ left: "10px", top: "-20px" }}
                    >
                      Ngày đăng
                    </div>
                    <span className="text-danger">
                      {/* {this.state.errors.maNhom} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="likes"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Lượt like</div>
                    <span className="text-danger">
                      {/* {this.state.errors.maNhom} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="shares"
                      onChange={handleChangeInput}
                      required
                    />
                    <div className="placeholder">Lượt share</div>
                    <span className="text-danger">
                      {/* {this.state.errors.maNhom} */}
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
