import React from "react";
import "./ModalComment.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
export default function ModalComment(props) {
  const taiKhoan = useSelector(
    (state) => state.QuanLyNguoiDungReducer.taiKhoan
  );
  let { maPhim } = props;

  var moment = require("moment");
  const getTime = () => {
    var d = new Date(); // for now
    let formatTime = moment(d).format("hh:mm A dd, DD/MM/yyyy");
    return formatTime;
  };

  let randomId = Math.floor(Math.random() * 9999);
  let [state, setState] = useState({
    id: randomId,
    maPhim: parseInt(maPhim),
    taiKhoan: taiKhoan,
    binhLuan: "",
    rating: "",
    ngayBinhLuan: getTime(),
  });

  let handleInput = (event) => {
    let { name, value } = event.target;
    let newState = {
      ...state,
      [name]: value,
    };
    setState(newState);
  };

  let commentRating = () => {
    qlyNguoiDung
      .themBinhLuan(state)
      .then((res) => {
        swal({
          title: "Đăng bình luận thành công",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => {
        swal({
          title: "Đăng bình luận không thành công",
          icon: "error",
          button: "OK",
        });
      });
  };

  const renderButton = () => {
    if (!localStorage.getItem("userLogin")) {
      return (
        <button
          className="btn btn-block button-post"
          onClick={() => {
            swal({
              title: "Bạn cần đăng nhập để bình luận",
              icon: "warning",
            });
          }}
        >
          Đăng
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block button-post"
          onClick={() => {
            swal({
              title: "Đăng bình luận này?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                commentRating();
              }
            });
          }}
        >
          Đăng
        </button>
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="CommentModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <form className="comment-form">
              <div className="rating">
                <input
                  type="radio"
                  name="rating"
                  value="10"
                  onChange={handleInput}
                  id="r1"
                />
                <label htmlFor="r1"></label>
                <input
                  type="radio"
                  name="rating"
                  value="8"
                  onChange={handleInput}
                  id="r2"
                />
                <label htmlFor="r2"></label>
                <input
                  type="radio"
                  name="rating"
                  value="6"
                  onChange={handleInput}
                  id="r3"
                />
                <label htmlFor="r3"></label>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  onChange={handleInput}
                  id="r4"
                />
                <label htmlFor="r4"></label>
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={handleInput}
                  id="r5"
                />
                <label htmlFor="r5"></label>
              </div>
              <div className="textb">
                <textarea
                  type="text"
                  name="binhLuan"
                  onChange={handleInput}
                  required
                />
                <div className="placeholder" value={state.binhLuan}>
                  Bình luận
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">{renderButton()}</div>
        </div>
      </div>
    </div>
  );
}
