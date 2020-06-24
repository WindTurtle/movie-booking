import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import ListMovie from "../components/ListMovie/ListMovie";
import News from "../components/News/News";
import AppMobile from "../components/AppMobile/AppMobile";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function Home() {
  let [rap, setRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layCumRapTheoHeThong()
      .then((result) => {
        setCumRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

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
  return (
    <div>
      <Carousel danhSachPhim={danhSachPhim} />
      <ListMovie danhSachPhim={danhSachPhim} />
      <ShowTimeHome rap={rap} cumRap={cumRap} />
      <News />
      <AppMobile />
    </div>
  );
}
