import React from "react";
export default function InfoTicketBooked(props) {
  var moment = require("moment");
  let { thongTin } = props;
  const renderInfoBooking = () => {
    return thongTin.thongTinDatVe?.map((ticket, index) => {
      return (
        <tr key={index}>
          <th scope="row">{"#" + Math.floor(Math.random() * 99999)}</th>
          <td>{ticket.tenPhim}</td>
          <td>
            {moment(ticket.ngayDat).format("DD-MM-yyyy")}
            <p>{moment(ticket.ngayDat).format("hh:mm A")}</p>
          </td>
          <td>
            <ul>
              {ticket.danhSachGhe?.map((ghe, index) => {
                return <li key={index}>Ghế: {ghe.tenGhe}</li>;
              })}
            </ul>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <h4 className="text-dark" style={{ textDecoration: "none" }}>
              Lịch sử đặt vé
            </h4>
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          <table className="table table-hover">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col">Mã vé</th>
                <th scope="col">Tên phim</th>
                <th scope="col">Thời gian đặt</th>
                <th scope="col">Số ghế</th>
              </tr>
            </thead>
            <tbody>{renderInfoBooking()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};