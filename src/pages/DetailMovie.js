import React, { useState, Fragment, useEffect } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import MovieInfo from "../components/DetailMovie/MovieInfo/MovieInfo";
import ShowTime from "../components/DetailMovie/ShowTime/ShowTime";
const DetailMovie = (props) => {
  let [phim, setPhim] = useState([]);
  useEffect(() => {
    qLyPhimService.layThongTinPhim(props.match.params.maphim).then((result) => {
      setPhim(result.data);
    });
  }, []);

  return (
    <Fragment>
      <MovieInfo phim={phim} />
      <ShowTime phim={phim} />
    </Fragment>
  );
};

export default DetailMovie;
