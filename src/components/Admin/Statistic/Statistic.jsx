import React from "react";
import "./Statistic.scss";
export default function Statistic(props) {
  let { lstHeThongRap } = props;
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
