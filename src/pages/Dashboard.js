import React from "react";
import Statistic from "../components/Admin/Statistic/Statistic";
import { userLogin } from "../config/setting";
export default function Dashboard(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (!localStorage.getItem(userLogin) || info.maLoaiNguoiDung === "KhachHang") {
    props.history.push("/");
  }

  return <Statistic />;
}
