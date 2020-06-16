import React, { Fragment } from "react";
import "./User.scss";
import ModalUser from "../ModalUser/ModalUser";
import EditModal from "../EditModal/EditModal";
export default function User(props) {
  let { listNguoiDung } = props;
  const renderDanhSachNguoiDung = () => {
    return listNguoiDung?.map((user, index) => {
      return (
        <tr key={index} className="user-item">
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="edit-action">
              <i
                class="fa fa-user-edit"
                data-toggle="modal"
                data-target="#EditModal"
              ></i>
            </div>
            <div className="delete-action">
              <i class="fa fa-trash-alt"></i>
            </div>
          </td>
          <EditModal />
        </tr>
      );
    });
  };
  return (
    <Fragment>
      <div className="title">
        <h2>Danh sách người dùng</h2>
        <button className="btnAdd" data-toggle="modal" data-target="#UserModal">
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div className="table-responsive-sm">
        <table className="table table-sm table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số ĐT</th>
              <th scope="col">Người dùng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>{renderDanhSachNguoiDung()}</tbody>
        </table>
      </div>
      <ModalUser />
    </Fragment>
  );
}
