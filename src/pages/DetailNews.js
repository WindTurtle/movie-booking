import React, { useState, useEffect, useMemo } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import NewsDetailComponent from "../components/NewsDetailComponent/NewsDetailComponent";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";

export default function DetailNews(props) {
  let [tinTuc, setTinTuc] = useState([]);
  const [loading, $loading] = useState(true);
  const maTinTuc = props.match.params.matintuc;
  useMemo(() => {
    qLyPhimService.layChiTietTinTuc(maTinTuc).then((result) => {
      setTimeout(() => {
        setTinTuc(result.data);
        $loading(false);
      }, 1500);
    });
  }, [maTinTuc]);

  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((res) => {
        setTimeout(() => {
          setDanhSachTinTuc(res.data);
          $loading(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <NewsDetailComponent tinTuc={tinTuc} danhSachTinTuc={danhSachTinTuc} />
      )}
    </React.Fragment>
  );
}
