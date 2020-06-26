import React from "react";
import "./Checkout.scss";
import swal from "sweetalert";
import { userLogin } from "../../../config/setting";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
import { Redirect } from "react-router-dom";
import CreditModal from "../CreditModal/CreditModal";
export default function Checkout(props) {
  let { thongTinPhongVe, danhSachGheDangDat, param } = props;
  const renderThongTinGheDangDat = () => {
    return danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <span key={index} className="mr-2">
          Ghế: {gheDangDat.tenGhe},
        </span>
      );
    });
  };
  const renderTongTien = () => {
    return danhSachGheDangDat
      .reduce((tongTien, gheDangDat, index) => {
        return (tongTien += gheDangDat.giaVe);
      }, 0)
      .toLocaleString();
  };

  if (!localStorage.getItem(userLogin)) {
    swal({
      title: "Bạn chưa đăng nhập",
      icon: "warning",
      buttons: "Ok",
    });
    return <Redirect to="/login" />;
  }

  const datVe = () => {
    let thongTinDatVe = {
      maLichChieu: param.match.params.maLichChieu,
      danhSachVe: danhSachGheDangDat,
      taiKhoanNguoiDung: JSON.parse(localStorage.getItem("userLogin")).taiKhoan,
    };
    qlyNguoiDung
      .datVe(thongTinDatVe)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Bạn chắc chứ?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Thanh toán thành công! Chúc bạn xem phim vui vẻ", {
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            swal("Chọn lại nào!");
          }
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="checkOut__right col-md-3 col-sm-12">
      <div className="checkout__form">
        <div className="total__price">
          <span className="price">₫{renderTongTien()}</span>
        </div>
        <div className="film__info">
          <span className="film__age--C">
            {thongTinPhongVe.thongTinPhim?.tenRap}
          </span>
          <span className="film__name">
            {thongTinPhongVe.thongTinPhim?.tenPhim}
          </span>
          <p className="film__detail">
            {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
            {thongTinPhongVe.thongTinPhim?.gioChieu}
          </p>
          <p className="theater__name">
            {thongTinPhongVe.thongTinPhim?.tenCumRap}
          </p>
          <p className="film__address">
            {thongTinPhongVe.thongTinPhim?.diaChi}
          </p>
        </div>
        <div className="count__slot">
          <div>Ghế đã chọn: </div>
          <div className="slot">{renderThongTinGheDangDat()}</div>
          {/* <span className="price">0đ</span> */}
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
          <a className="pay__link" href="/#">
            <span className="title__text">Hình thức thanh toán</span>
            <p className="text__notification">
              Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
            </p>
          </a>
        </div>
      </div>
      <div className="textNotification text-center">
        <i className="fa fa-info-circle text-danger mr-1" />
        <span className="noti__text">
          Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn{" "}
          <span className="noti__link">ZMS</span> (tin nhắn Zalo) và{" "}
          <span className="noti__link">Email</span> đã nhập.{" "}
        </span>
      </div>
      <div
        id="btnBook"
        className="btnBook"
        data-toggle="modal"
        data-target="#CreditModal"
        // onClick={() => {
        //   datVe();
        // }}
      >
        Thanh toán
      </div>
      <CreditModal datVe={datVe} />
    </div>
  );
}
