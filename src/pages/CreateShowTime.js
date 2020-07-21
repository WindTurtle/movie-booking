import React from "react";
import CreateShowTimeForm from "../components/Admin/CreateShowTime/CreateShowTimeForm";
import { userLogin } from "../config/setting";
export default function CreateShowTime(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (
    !localStorage.getItem(userLogin) ||
    info.maLoaiNguoiDung === "KhachHang"
  ) {
    props.history.push("/");
  }

  return (
    <div>
      <CreateShowTimeForm />
    </div>
  );
}
