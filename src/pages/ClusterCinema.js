import React, { useEffect, useState } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import CinemaSystem from '../components/CinemaSystem/CinemaSystem'
export default function ClusterCinema() {
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
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div>
      <CinemaSystem lstHeThongRap={heThongRap} cumRap={cumRap} />
    </div>
  );
}
