import React, { useState, useEffect } from "react";
import CreateShowTimeForm from "../components/Admin/CreateShowTime/CreateShowTimeForm";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function CreateShowTime() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div>
      <CreateShowTimeForm danhSachPhim={danhSachPhim} heThongRap={heThongRap} />
    </div>
  );
}
