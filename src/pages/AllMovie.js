import React, { useState, useEffect } from "react";
import Movie from "../components/Movie/Movie";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function AllMovie() {
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
  return <Movie danhSachPhim={danhSachPhim} />;
}
