import React, { useState, useEffect } from "react";
import UserInformation from "../components/UserInformation/UserInformation";
import { qlyNguoiDung } from "../services/QuanLyNguoiDungServices";
const Profile = (props) => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    qlyNguoiDung
      .layThongTinTaiKhoan(JSON.parse(localStorage.getItem("userLogin")))
      .then((result) => {
        setUser(result.data);
      });
  }, []);
  return <UserInformation thongTin={user} />;
};

export default Profile;
