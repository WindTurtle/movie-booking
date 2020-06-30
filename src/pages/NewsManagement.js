import React, { useState, useEffect } from "react";
import News from "../components/Admin/News/News";
import { qLyPhimService } from "../services/QuanLyPhimServices";
export default function NewsManagement(props) {
  let [listTinTuc, setTinTuc] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((result) => {
        setTinTuc(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return <News listTinTuc={listTinTuc} />;
}
