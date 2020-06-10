import React from "react";
import "./Checkout.scss";
export default function Checkout(props) {
  let { thongTinPhongVe } = props;
  console.log(thongTinPhongVe);
  
  return (
    <div className="checkOut__right col-md-3 col-sm-12">
      <div className="checkout__form">
        <div className="total__price">
          <span className="price">0đ</span>
        </div>
        <div className="film__info">
          <span className="film__age--C">
            {thongTinPhongVe.thongTinPhim?.tenRap}
          </span>
          <span className="film__name">
            {thongTinPhongVe.thongTinPhim?.tenPhim}
          </span>
          <p className="theater__name">
            {thongTinPhongVe.thongTinPhim?.tenCumRap}
          </p>
          <p className="film__detail">
            {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
            {thongTinPhongVe.thongTinPhim?.gioChieu}
          </p>
          <p className="film__address">
            {thongTinPhongVe.thongTinPhim?.diaChi}
          </p>
        </div>
        <div className="count__slot d-flex justify-content-between">
          <span className="slot">Ghế</span>
          <span className="price">0đ</span>
        </div>
        <div className="discountForm d-flex justify-content-between">
          <div className="discountForm__content">
            <label className="label__name">Mã giảm giá</label>
            <input
              type="text"
              name="code"
              id="txtDiscountCode"
              className="form-control d-inline"
              placeholder="Nhập tại đây..."
            />
          </div>
          <button id="btnCheckCode" className="btn mb-2">
            Áp dụng
          </button>
        </div>
        <div className="payForm">
          <a className="pay__link" href="#">
            <span className="text">Hình thức thanh toán</span>
            <p className="text__notification">
              Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
            </p>
          </a>
        </div>
      </div>
      <div className="textNotification text-center">
        <i className="fa fa-info-circle text-danger mr-1" />
        <span className="text">
          Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn{" "}
          <span className="link">ZMS</span> (tin nhắn Zalo) và{" "}
          <span className="link">Email</span> đã nhập.{" "}
        </span>
      </div>
      <div id="btnBook" className="btnBook">
        Đặt Vé
      </div>
    </div>
  );
}
