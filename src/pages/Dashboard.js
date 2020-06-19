import React, { useEffect, useState } from "react";
import Statistic from "../components/Admin/Statistic/Statistic";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import CinemaSystem from "../components/Admin/CinemaSystem/CinemaSystem";
export default function Dashboard() {
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
  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layCumRapTheoHeThong()
      .then((res) => {
        setCumRap(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div>
      <CinemaSystem lstHeThongRap={heThongRap} cumRap={cumRap} />
      <Statistic lstHeThongRap={heThongRap} />
    </div>
  );
}
