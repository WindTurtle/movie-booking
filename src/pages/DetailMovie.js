import React, { useState, Fragment, useMemo } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import MovieInfo from "../components/DetailMovie/MovieInfo/MovieInfo";
import ShowTime from "../components/DetailMovie/ShowTime/ShowTime";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";

const DetailMovie = (props) => {
  let [phim, setPhim] = useState([]);
  const [loading, $loading] = useState(true);
  const maPhim = props.match.params.maphim;
  useMemo(
    () =>
      qLyPhimService.layThongTinPhim(maPhim).then((result) => {
        setTimeout(() => {
          setPhim(result.data);
          $loading(false);
        }, 1500);
      }),
    [maPhim]
  );

  return (
    <Fragment>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <MovieInfo phimItem={phim} />
          <ShowTime phim={phim} maPhim={maPhim} />
        </>
      )}
    </Fragment>
  );
};

export default DetailMovie;
