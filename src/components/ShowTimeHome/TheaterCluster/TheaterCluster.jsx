import React, { Fragment } from "react";
import ShowTime from "../ShowTimes/ShowTime";
export default function TheaterCluster(props) {
  let { cumRap } = props;
  const renderCum = () => {
    return cumRap.map((cumRap, index) => {
      return (
        <div
          className="tab-pane fade show"
          id={cumRap.maHeThongRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          key={index}
        >
          <div className="secondary__row row">
            <div className="secondary__tab col-md-5 col-sm-12">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderCumRap(cumRap)}
              </div>
            </div>
            <div className="secondary__tabContent col-md-7 col-sm-12">
              <div className="tab-content" id="v-pills-tabContent">
                {renderShowTime(cumRap)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderShowTime = (cumRap) => {
    return cumRap.lstCumRap?.map((rap, index) => {
      return (
        <div
          className="tab-pane fade show"
          id={rap.maCumRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          key={index}
        >
          <div className="tab__list">
            <ul>
              <ShowTime rap={rap} maCumRap={rap.maCumRap} />
            </ul>
          </div>
        </div>
      );
    });
  };
  const renderCumRap = (cumRap) => {
    return cumRap.lstCumRap?.map((rap, index) => {
      return (
        <a
          className="nav-link"
          data-toggle="pill"
          href={`#${rap.maCumRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          key={index}
        >
          <div className="img__theater">
            <img
              src="https://cdn2.iconfinder.com/data/icons/cinema-hall-and-movie-making/50/21-512.png"
              alt="sdsd"
            />
          </div>
          <div className="text__theater">
            <span className="name__theater">
              <span className="name__aftertheater">{rap.tenCumRap}</span>
            </span>
            <p className="address__theater">{rap.diaChi}</p>
            <span className="detail__theater">[chi tiết]</span>
          </div>
        </a>
      );
    });
  };
  return <Fragment>{renderCum()}</Fragment>;
}
