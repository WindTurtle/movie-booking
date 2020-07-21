import React, { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import ListMovie from "../components/ListMovie/ListMovie";
import News from "../components/News/News";
import AppMobile from "../components/AppMobile/AppMobile";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <ListMovie />
      <ShowTimeHome />
      <News />
      <AppMobile />
    </Fragment>
  );
}
