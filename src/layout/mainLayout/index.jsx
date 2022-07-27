import React from "react";
import { Outlet } from "react-router-dom";
import { FooterContainer } from "components/footer";
import Header from "components/header";

export default function Customer(props) {

  return (
    <>
      <Header />
      {props.children}
      <Outlet />
      <FooterContainer />
    </>
  );
}
