import React, { Fragment } from "react";
import "./Comment.scss";
import ModalComment from "../ModalComment/ModalComment";
import { Redirect } from "react-router-dom";
export default function Comment() {
  let comment = JSON.parse(localStorage.getItem("commentData"));
  const renderStar = (rating) => {
    if (rating > 5) rating = 5;
    var content = [];
    for (let i = 0; i < rating; i++) {
      var star = [];
      star.push(<i className="fa fa-star" key={i}></i>);
      content.push(star);
    }
    for (let i = 0; i < 5 - rating; i++) {
      var star = [];
      star.push(<i className="fa fa-star" key={i}></i>);
      content.push(star);
    }
    return content;
  };
  const countRatingMark = (rating) => {
    return rating * 0.5 + 10 * 0.5;
  };
  const renderComment = () => {
    if (comment) {
      return (
        <Fragment>
          <div className="comment__items">
            <div className="comment__info">
              <div className="items__img">
                <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="commentavt" />
              </div>
              <div className="items__info">
                <p className="info--name">{comment.taiKhoan}</p>
                <p className="info--time">{comment.ngayBinhLuan}</p>
              </div>
              <div className="items__rating">
                <p className="rating--point">
                  {countRatingMark(comment.rating)}
                </p>
                <div className="rating--stars">
                  {renderStar(comment.rating)}
                </div>
              </div>
            </div>
            <div className="comment__content">{comment.binhLuan}</div>
            <hr />
            <div className="comment__icon">
              <i className="far fa-thumbs-up" />
              <span className="count--number">0 </span>
              <span className="like--text">Thích</span>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return;
    }
  };
  return (
    <Fragment>
      <div className="youthink" data-toggle="modal" data-target="#CommentModal">
        <div className="youthink__items">
          <div className="items__img">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="avt" />
          </div>
          <span className="items__text">Bạn nghĩ gì về phim này?</span>
          <div className="items__stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
        </div>
      </div>
      <ModalComment />
      <div className="list__comment">
        {renderComment()}
        <div className="comment__items">
          <div className="comment__info">
            <div className="items__img">
              <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="commentavt" />
            </div>
            <div className="items__info">
              <p className="info--name">Thai Nguyen</p>
              <p className="info--time">2 giờ trước</p>
            </div>
            <div className="items__rating">
              <p className="rating--point">7</p>
              <div className="rating--stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="far fa-star" />
                {/* <i class="fa fa-star"></i> */}
              </div>
            </div>
          </div>
          <div className="comment__content">
            Phim hay, dịch quá không ai dám đi coi...
          </div>
          <hr />
          <div className="comment__icon">
            <i className="far fa-thumbs-up" />
            <span className="count--number">20 </span>
            <span className="like--text">Thích</span>
          </div>
        </div>
        <div className="comment__items">
          <div className="comment__info">
            <div className="items__img">
              <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="commentavt" />
            </div>
            <div className="items__info">
              <p className="info--name">Sang Nguyen</p>
              <p className="info--time">4 giờ trước</p>
            </div>
            <div className="items__rating">
              <p className="rating--point">5</p>
              <div className="rating--stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                {/* <i class="far fa-star"></i> */}
                {/* <i class="fa fa-star"></i> */}
              </div>
            </div>
          </div>
          <div className="comment__content">
            Phim hay, nhưng đi coi phim về mất chiếc dép. Ai lấy dép mình vui
            lòng gọi vào số 0987652362. Cám ơn !!!
          </div>
          <hr />
          <div className="comment__icon">
            <i className="far fa-thumbs-up" />
            <span className="count--number">1000 </span>
            <span className="like--text">Thích</span>
          </div>
        </div>
      </div>
      <div className="readMore">
        <button className="btn btn__readmore">XEM THÊM</button>
      </div>
    </Fragment>
  );
}
