import React from "react";
import "./UserInformation.scss";
import { Redirect, NavLink } from "react-router-dom";
import InfoTicketBooked from "./InfoTicketBooked/InfoTicketBooked";
export default function Information(props) {
  const info = JSON.parse(localStorage.getItem("userLogin"));
  const renderAdmin = () => {
    if (info.maLoaiNguoiDung === "QuanTri") {
      return (
        <button className="btn btn-block btn__admin">
          <NavLink
            className="admin__link"
            to="/dashboard"
          >
            Tới trang quản trị
          </NavLink>
        </button>
      );
    } else {
      return;
    }
  };

  if (!localStorage.getItem("userLogin")) {
    return <Redirect to="/home" />;
  }
  let { thongTin } = props;
  return (
    <div className="profile container-fluid text-light">
      <div className="row">
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
            {/* <button className="btn btn-success">Chỉnh sửa thông tin</button> */}
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
                    <tr>
                      <th scope="row">Loại người dùng</th>
                      <td>{info.maLoaiNguoiDung}</td>
                    </tr>
                  </tbody>
                </table>
                {renderAdmin()}
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-light">
                <div id="accordion">
                  <InfoTicketBooked thongTin={thongTin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
