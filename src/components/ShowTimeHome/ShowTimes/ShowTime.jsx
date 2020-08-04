import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function ShowTime(props) {
  let { rap, maCumRap } = props;
  var moment = require("moment");
  console.log(rap);
  const renderShowTime = (phim) => {
    return phim.lstLichChieuTheoPhim?.slice(0, 4).map((lichChieu, index) => {
      return (
        <div className="film__timeshow" key={index}>
          <ul>
            <li className="timeshow__item">
              <NavLink
                className="timeshow__link"
                to={`/booking/${lichChieu.maLichChieu}`}
              >
                <span className="time__begin">
                  {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      );
    });
  };
  const renderMovie = () => {
    if (rap.maCumRap === maCumRap) {
      return rap.danhSachPhim?.map((phim, index) => {
        return (
          <li className="film__item" key={index}>
            <a
              className="film__link"
              data-toggle="collapse"
              href={`#${"id" + phim.maPhim}`}
              role="button"
              aria-expanded="false"
              aria-controls={phim.maPhim}
            >
              <div className="row">
                <div className="film__img col-2">
                  <img src={phim.hinhAnh} alt={phim.hinhAnh} />
                </div>
                <div className="film__title col-10">
                  <span className="age--C">2D</span>
                  <span className="film__name">{phim.tenPhim}</span>
                  <p className="film__timming">99 phút - 7 - IMDb 6.9</p>
                </div>
              </div>
            </a>
            <div className="collapse" id={"id" + phim.maPhim}>
              <div className="collapse__content">{renderShowTime(phim)}</div>
            </div>
          </li>
        );
      });
    }
  };
  return <Fragment>{renderMovie()}</Fragment>;
}
