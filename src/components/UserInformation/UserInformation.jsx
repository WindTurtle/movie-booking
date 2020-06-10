import React from "react";
import "./UserInformation.scss";
import OwlCarousel from "react-owl-carousel";
import { Redirect } from "react-router-dom";
export default function Information(props) {
  const responsive = {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  };
  const info = JSON.parse(localStorage.getItem("userLogin"));
  if (!localStorage.getItem("userLogin")) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="profile container-fluid text-light">
      <div className="row">
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
          </div>
          <div className="tableInfo">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-left bg-light">
                <h2 className="text-dark">Thông tin cá nhân</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Tên</th>
                      <td>{info.hoTen}</td>
                    </tr>
                    <tr>
                      <th scope="row">Tài khoản</th>
                      <td>{info.taiKhoan}</td>
                    </tr>
                    <tr>
                      <th scope="row">Mã nhóm</th>
                      <td>{info.maNhom}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{info.soDT}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{info.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-light">
                <h2 className="text-dark">Phim đã đặt</h2>
                <OwlCarousel
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
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
