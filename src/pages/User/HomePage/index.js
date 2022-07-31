import Carousel from "components/carousel";
import Header from "components/header";
import React from "react";
import ListMovie from "components/listMovie";
import Cinema from "components/cinema";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ListMovie />
      <Cinema />
    </>
  );
};
export default HomePage;
