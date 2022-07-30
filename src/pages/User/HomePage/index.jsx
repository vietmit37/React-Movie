import Carousel from "components/carousel";
import React from "react";
import ListMovie from "components/listMovie";
import Cinema from "components/cinema";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <ListMovie />
      <Cinema />
    </>
  );
}
