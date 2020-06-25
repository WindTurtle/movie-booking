import React from "react";
import "./ModalComment.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

import swal from "sweetalert";
export default function ModalComment() {
  const taiKhoan = useSelector(
    (state) => state.QuanLyNguoiDungReducer.taiKhoan
  );
  var moment = require("moment");
  const getTime = () => {
    var d = new Date(); // for now
    let formatTime = moment(d).format("hh:mm dd, DD/MM/yyyy");
    return formatTime;
  };

  let [state, setState] = useState({
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

  console.log(state);

  let commentRating = () => {
    localStorage.setItem("commentData", JSON.stringify(state));
    swal({
      title: "Đăng bình luận thành công",
      icon: "success",
      button: "OK",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
              <div class="rating">
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  onChange={handleInput}
                  id="r1"
                />
                <label for="r1"></label>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  onChange={handleInput}
                  id="r2"
                />
                <label for="r2"></label>
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={handleInput}
                  id="r3"
                />
                <label for="r3"></label>
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={handleInput}
                  id="r4"
                />
                <label for="r4"></label>
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={handleInput}
                  id="r5"
                />
                <label for="r5"></label>
              </div>
              <div className="textb">
                <textarea
                  type="text"
                  name="binhLuan"
                  onChange={handleInput}
                  required
                />
                <div className="placeholder">Bình luận</div>
              </div>
            </form>
          </div>
          <div className="modal-footer">{renderButton()}</div>
        </div>
      </div>
    </div>
  );
}
