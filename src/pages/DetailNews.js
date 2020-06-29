import React, { useState, useEffect } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import NewsDetailComponent from "../components/NewsDetailComponent/NewsDetailComponent";
export default function DetailNews(props) {
  let [tinTuc, setTinTuc] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layChiTietTinTuc(props.match.params.matintuc)
      .then((result) => {
        setTinTuc(result.data);
      });
  }, [props.match.params.matintuc]);

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
  }, []);

  return (
    <NewsDetailComponent tinTuc={tinTuc} danhSachTinTuc={danhSachTinTuc} />
  );
}
