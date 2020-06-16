import React, { useState, useEffect } from "react";
import User from "../components/Admin/User/User";
import { qLyAdminService } from "../services/QuanLyAdminService";
export default function UserManagement(props) {
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);

  useEffect(() => {
    qLyAdminService
      .layDanhSachNguoiDung()
      .then((res) => {
        setDanhSachNguoiDung(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return <User listNguoiDung={danhSachNguoiDung} />;
}
