import React, { Fragment } from "react";
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
              Xem thông tin
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
}
{
  /* <OwlCarousel
              loop
              items={4}
              margin={10}
              dots={true}
              responsive={responsive}
              className="moviebookedCarousel owl-carousel owl-theme"
            >
              <div className="item">
                <div className="item__img">
                  <img
                    className="img-fluid"
                    src="https://s3img.vcdn.vn/mobile/123phim/2020/05/quy-lun-tinh-nghich-chuyen-luu-dien-the-gioi-15903757824561_215x318.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="item__img">
                  <img
                    className="img-fluid"
                    src="https://s3img.vcdn.vn/mobile/123phim/2020/05/duong-ham-sinh-tu-15900291863915_215x318.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="item__img">
                  <img
                    className="img-fluid"
                    src="https://s3img.vcdn.vn/mobile/123phim/2020/05/pretoria-phi-vu-dao-tau-15889071029254_215x318.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="item__img">
                  <img
                    className="img-fluid"
                    atl="11"
                    src="https://s3img.vcdn.vn/mobile/123phim/2020/03/ke-dao-tau-giac-mo-coma-c16-15838249622299_215x318.jpg"
                  />
                </div>
              </div>
              <div className="item">
                <div className="item__img">
                  <img
                    className="img-fluid"
                    atl="11"
                    src="https://s3img.vcdn.vn/mobile/123phim/2020/02/bloodshot-15815812953448_215x318.jpg"
                  />
                </div>
              </div>
            </OwlCarousel> */
}
