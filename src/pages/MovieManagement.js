import React, { useState, useEffect } from "react";
import Movie from "../components/Admin/Movie/Movie";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function MovieManagement() {
  let [phim, setDanhSachPhim] = useState([]);
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
  return (
    <div>
      <Movie danhSachPhim={phim} />
    </div>
  );
}
