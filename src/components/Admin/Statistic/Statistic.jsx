import React, { useEffect, useState } from "react";
import "./Statistic.scss";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
export default function Statistic() {
  let [lstHeThongRap, setHeThongRap] = useState([]);

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
  const renderRap = () => {
    return lstHeThongRap.map((rap, index) => {
      return (
        <dd className={`percentage percentage-${index + 50}`} key={index}>
          <span className="text">
            {rap.tenHeThongRap}
            <img
              src={rap.logo}
              style={{ width: 40, height: 40 }}
              alt={rap.logo}
            />
          </span>
        </dd>
      );
    });
  };
  return (
    <dl>
      <dt>Rạp phim được đặt vé nhiều nhất 2020</dt>
      {renderRap()}
    </dl>
  );
}
