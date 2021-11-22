import React, { Fragment, useEffect } from "react";
import "./Comment.scss";
import ModalComment from "../ModalComment/ModalComment";
import { useState } from "react";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
export default function Comment(props) {
  let { maPhim } = props;
  const renderStar = (rating) => {
    if (rating > 5) rating = 5;
    var content = [];
    for (let i = 0; i < rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star" key={i}></i>);
      content.push(star);
    }
    for (let i = 0; i < 5 - rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star-half-alt" key={i}></i>);
      content.push(star);
    }
    return content;
  };
  const countRatingMark = (rating) => {
    return rating * 0.5 + 10 * 0.5;
  };
  let [comment, setComment] = useState([]);
  useEffect(() => {
    qlyNguoiDung
      .layBinhLuan()
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [comment]);
  const renderComment = () => {
    if (comment) {
      return comment.reverse().map((item, index) => {
        if (item.maPhim === parseInt(maPhim)) {
          return (
            <div className="comment__items" key={index}>
              <div className="comment__info">
                <div className="items__img">
                  <img
                    src="https://i.ibb.co/PCjW83Y/avt.png"
                    alt="commentavt"
                  />
                </div>
                <div className="items__info">
                  <p className="info--name">{item.taiKhoan}</p>
                  <p className="info--time">{item.ngayBinhLuan}</p>
                </div>
                <div className="items__rating">
                  <p className="rating--point">
                    {countRatingMark(item.rating)}
                  </p>
                  <div className="rating--stars">{renderStar(item.rating)}</div>
                </div>
              </div>
              <div className="comment__content">{item.binhLuan}</div>
              <hr />
              <div className="comment__icon">
                <i className="far fa-thumbs-up" />
                <span className="count--number">0 </span>
                <span className="like--text">Thích</span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
    }
  };
  return (
    <Fragment>
      <div className="youthink" data-toggle="modal" data-target="#CommentModal">
        <div className="youthink__items">
          <div className="items__img">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="avt" />
            <span className="items__text">Bình luận nào...</span>
          </div>
          <div className="items__stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
        </div>
      </div>
      <ModalComment maPhim={maPhim} />
      <div className="list__comment">{renderComment()}</div>
      {/* <div className="readMore">
        <button className="btn btn__readmore">XEM THÊM</button>
      </div> */}
    </Fragment>
  );
}
