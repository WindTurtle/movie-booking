import React, { Fragment, useEffect, useState } from "react";
import "./ChooseSlot.scss";
import swal from "sweetalert";
export default function ChooseSlot(props) {
  let { thongTinPhongVe, danhSachGheDangDat, setDanhSachGheDangDat } = props;
  const renderGhe = (daDat, ghe) => {
    if (daDat) {
      return <i className="fa fa-couch slot__item item--picked"></i>;
    } else {
      let cssGheDangDat = "";

      let index = danhSachGheDangDat?.findIndex(
        (gheDangDat) => gheDangDat.stt === ghe.stt
      );
      if (index !== -1) {
        cssGheDangDat = "item--picking";
      }
      let cssGheVip = "";
      if (ghe.loaiGhe === "Vip") {
        cssGheVip = "item--vip";
      }
      return (
        <i
          className={`fa fa-couch slot__item ${cssGheVip} ${cssGheDangDat}`}
          onClick={() => {
            datGhe(ghe);
          }}
        ></i>
      );
    }
  };
  const datGhe = (ghe) => {
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      danhSachGheDangDat.splice(index, 1);
    } else {
      danhSachGheDangDat = [...danhSachGheDangDat, ghe];
    }
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };
  const renderDanhSachGhe = () => {
    let { danhSachGhe } = thongTinPhongVe;
    return danhSachGhe?.map((ghe, index) => {
      return <Fragment key={index}>{renderGhe(ghe.daDat, ghe)}</Fragment>;
    });
  };
  const [counter, setCounter] = useState(60 * 5);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      swal("Bạn đã chọn vé quá lâu! Ahihi", {
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [counter]);
  return (
    <div className="checkOut__left col-md-9 col-sm-12 p-0">
      <div className="bookSlot">
        <div
          className="poster__film"
          style={{
            backgroundImage: `url('${thongTinPhongVe.thongTinPhim?.hinhAnh}')`,
          }}
        >
          <div className="overlay" />
        </div>
        <div className="bookSlot__content">
          <div className="theater__info d-flex justify-content-between">
            <div className="theater__img d-flex bg-light">
              <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt="hinhanh" />
              <div className="theater__name">
                <span className="name">
                  <span className="subname">
                    {thongTinPhongVe.thongTinPhim?.tenRap}
                  </span>
                </span>
                <p className="showtime">
                  Giờ chiếu: {thongTinPhongVe.thongTinPhim?.gioChieu}
                </p>
              </div>
            </div>
            <div className="timeKeepSlot">
              <p className="title__text">thời gian giữ ghế</p>
              <span className="time">{counter + "s"}</span>
            </div>
          </div>
          <div className="chooseSlot">
            <div className="screen__img">
              <img src="https://i.ibb.co/zWgWjtg/screen.png" alt="screen" />
            </div>
            <div className="picking row">
              <div className="slot__picking col-12">
                <div className="slot__row">{renderDanhSachGhe()}</div>
              </div>
            </div>
            <div className="slot__detail row">
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa fa-couch item--picking" />
                <span className="slot__text">Ghế đang chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa fa-couch item--picked" />
                <span className="slot__text">Ghế đã chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa fa-couch item--regular" />
                <span className="slot__text">Ghế chưa chọn</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <i className="fa fa-couch item--vip" />
                <span className="slot__text">Ghế Vip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
