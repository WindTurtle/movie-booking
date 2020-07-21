import React from "react";
import News from "../components/Admin/News/News";
import { userLogin } from "../config/setting";
export default function NewsManagement(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (
    !localStorage.getItem(userLogin) ||
    info.maLoaiNguoiDung === "KhachHang"
  ) {
    props.history.push("/");
  }

  return <News />;
}
