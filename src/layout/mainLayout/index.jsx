import React from "react";
import { FooterContainer } from "components/footer";
import Header from "components/header";

export default function Customer(props) {
  return (
    <>
      <Header />
      {props.children}
      <FooterContainer />
    </>
  );
}
