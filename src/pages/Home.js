import React, { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import ListMovie from "../components/ListMovie/ListMovie";
import News from "../components/News/News";
import AppMobile from "../components/AppMobile/AppMobile";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
import ScrollAnimation from "react-animate-on-scroll";
export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <ScrollAnimation animateIn="zoomIn">
        <ListMovie />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ShowTimeHome />
      </ScrollAnimation>
      <ScrollAnimation animateIn="zoomIn">
        <News />
      </ScrollAnimation>
      <AppMobile />
    </Fragment>
  );
}
