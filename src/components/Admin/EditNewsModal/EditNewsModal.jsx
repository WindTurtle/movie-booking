import React from "react";
import "./EditNewsModal.scss";
import { useState } from "react";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";
export default function EditNewsModal(props) {
  let { tinTuc } = props;
  let [state, setState] = useState({
    values: {
      title: tinTuc.title,
      description1: tinTuc.description1,
      description2: tinTuc.description2,
      description3: tinTuc.description3,
      image1: tinTuc.image1,
      image2: tinTuc.image2,
      image3: tinTuc.image3,
      author: tinTuc.author,
      dayupload: tinTuc.dayupload,
      likes: tinTuc.likes,
      shares: tinTuc.shares,
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
        .suaTinTuc(tinTuc.id, values)
        .then((res) => {
          swal({
            title: "Sửa tin thành công",
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
      className="editNewsModal modal fade"
      id={`d${tinTuc.id}`}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="editNewsModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editNewsModalTitle">
              Sửa tin tức
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
                      value={state.values.title}
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
                      value={state.values.description1}
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
                      value={state.values.description2}
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
                      value={state.values.description3}
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
                      value={state.values.image1}
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
                      value={state.values.image2}
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
                      value={state.values.image3}
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
                      value={state.values.author}
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
                      value={state.values.dayupload}
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
                      value={state.values.likes}
                      disabled
                      required
                    />
                    <div
                      className="placeholder"
                      style={{ left: "10px", top: "-20px" }}
                    >
                      Lượt like
                    </div>
                    <span className="text-danger">
                      {/* {this.state.errors.maNhom} */}
                    </span>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="shares"
                      onChange={handleChangeInput}
                      value={state.values.shares}
                      disabled
                      required
                    />
                    <div
                      className="placeholder"
                      style={{ left: "10px", top: "-20px" }}
                    >
                      Lượt share
                    </div>
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
