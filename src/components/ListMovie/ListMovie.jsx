import React from "react";
import "../ListMovie/ListMovie.scss";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

export default function ListMovie({ danhSachPhim }) {
  return (
    <div id="listMovie" className="listMovie">
      <div className="container">
        <div id="listMovieTab">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-dangchieu"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-sapchieu"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Sắp Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-dangchieu"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <MovieCarousel list={danhSachPhim} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-sapchieu"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <MovieCarousel list={danhSachPhim} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
