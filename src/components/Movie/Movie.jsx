import React, { useState, useEffect } from "react";
import "../Movie/Movie.scss";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import MovieItem from "../MovieItem/MovieItem";

export default function AllMovie() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [danhSachPhimSearch, setDanhSachPhimSearch] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = danhSachPhim.filter((phim) => {
      return phim.tenPhim.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDanhSachPhimSearch(results);
  }, [searchTerm, danhSachPhim]);

  const renderDanhSachPhim = () => {
    return danhSachPhimSearch.map((phim, index) => {
      return <MovieItem phimItem={phim} key={index} />;
    });
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <div className="container all-movie">
        <div className="search">
          <div id="wrap">
            <form autoComplete="on">
              <input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Nhập tên phim cần tìm"
              />
              <input
                id="search_submit"
                defaultValue="Rechercher"
                type="submit"
              />
            </form>
          </div>
        </div>
        <div className="row movielist-content">{renderDanhSachPhim()}</div>
      </div>
    );
  }
}
