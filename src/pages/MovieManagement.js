import React from "react";
import Movie from "../components/Admin/Movie/Movie";
import { userLogin } from "../config/setting";
export default function MovieManagement(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (
    !localStorage.getItem(userLogin) ||
    info.maLoaiNguoiDung === "KhachHang"
  ) {
    props.history.push("/");
  }

  return <Movie />;
}
