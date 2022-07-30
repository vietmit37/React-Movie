import React from "react";
import Footer from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
export function FooterContainer() {
  const { data } = useSelector((state) => state.cinemaReducer);
  const renderCinemaLogo = () => {
    return data?.map((heThongRap, index) => {
      return (
       
          <Grid item xs={4} key={index}>
            <img
              src={heThongRap.logo}
              alt="logo"
              className="rounded-full"
              style={{ width: "40px" }}
            />
          </Grid>
       
      );
    });
  };
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>ĐỐI TÁC</Footer.Title>
            <Footer.Link href="#">
              <Grid container>{renderCinemaLogo()}</Grid>
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>DỊCH VỤ</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>CHÍNH SÁCH</Footer.Title>
            <Footer.Link href="#">United States</Footer.Link>
            <Footer.Link href="#">United Kingdom</Footer.Link>
            <Footer.Link href="#">Australia</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>MẠNG XÃ HỘI</Footer.Title>
            <Footer.Link href="#">
              <FacebookIcon />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <InstagramIcon />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <YouTubeIcon />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
