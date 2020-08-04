import React from "react";
import { Stretch } from "styled-loaders-react";
import "./SpinnerLoading.scss";
export default function SpinnerLoading() {
  return (
    <div className="loader">
      <Stretch color="#60c5ef" size="70px" />
    </div>
  );
}
