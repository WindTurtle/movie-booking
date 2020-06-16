import React, { useEffect, useState } from "react";
import Statistic from "../components/Admin/Statistic/Statistic";
import { qLyPhimService } from "../services/QuanLyPhimServices";
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
  });
  return (
    <div>
      <Statistic lstHeThongRap={heThongRap} />
    </div>
  );
}
