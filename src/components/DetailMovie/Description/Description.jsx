import React from "react";
import "./Description.scss";
export default function Description(props) {
  let { thongTin } = props;
  var moment = require("moment");
  return (
    <div className="row__above row">
      <div className="info__category col-md-6 col-sm-12">
        <div className="category__item">
          <p className="category__name">Ngày phát hành</p>
          <p className="category__content">{moment(thongTin.ngayKhoiChieu).format('DD/MM/yyyy')}</p>
        </div>
        <div className="category__item">
          <p className="category__name">Đạo diễn</p>
          <p className="category__content">Dave Wilson</p>
        </div>
        <div className="category__item">
          <p className="category__name">Thể Loại</p>
          <p className="category__content">Hành động</p>
        </div>
        <div className="category__item">
          <p className="category__name">Định dạng</p>
          <p className="category__content">2D/Digital</p>
        </div>
      </div>
      <div className="info__content col-md-6 col-sm-12">
        <div className="info__title">Nội dung</div>
        <p className="info__text">
          {thongTin.moTa}
        </p>
      </div>
    </div>
  );
}
