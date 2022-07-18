import Carousel from "components/carousel";
import Header from "components/header";
import React from "react";
import ListMovie from "components/listMovie";
import Cinema from "components/cinema";
import Global from "styles/global";

export default function HomePage() {
  return (
    <>
      <Global />
      <Header />
      <Carousel />
      <ListMovie />
      <Cinema />
    </>
  );
}
