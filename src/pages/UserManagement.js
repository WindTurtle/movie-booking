import React from "react";
import User from "../components/Admin/User/User";
import { userLogin } from "../config/setting";
export default function UserManagement(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (
    !localStorage.getItem(userLogin) ||
    info.maLoaiNguoiDung === "KhachHang"
  ) {
    props.history.push("/");
  }

  return <User />;
}
