import React, { useState, useEffect } from "react";
import NewsComponent from "../components/NewsComponent/NewsComponent";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function News(props) {
  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((res) => {
        setDanhSachTinTuc(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });
  return <NewsComponent danhSachTinTuc={danhSachTinTuc} />;
}
