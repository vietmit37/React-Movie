import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Logo,
  HeaderContent,
  Image,
  LinkLogo,
  StyledNavLink,
  Log,
  Contact,
  ButtonLog,
  SmallScreen,
  BigScreen,
  MenuSmallScreen,
  StyledLink,
  StyledNavLinkSmallScreen,
} from "./style";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContactsIcon from "@mui/icons-material/Contacts";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DivNormal } from "components/cinema/style";
import HomeIcon from "@mui/icons-material/Home";

export default function Header(props) {
  const [header, setHeader] = useState({
    position: "absolute",
    background: "transparent",
    width: "100% !important",
    zIndex: "100",
    width: "100%",
  });

  const [navLink, setNavLink] = useState({
    color: "white",
  });

  const [subMenu, setSubMenu] = useState({
    display: "none",
  });

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sclY = window.scrollY;
      if (sclY > 0) {
        setHeader({
          position: "fixed",
          paddingTop: "0",
          boxShadow: "0 3px 6px 0 rgb(0 0 0 / 67%)",
          transition: "all 0.65s",
          zIndex: "5",
          height: "85px",
          background: "white",
          width: "100%",
        });

        setNavLink({
          color: "black",
        });
      } else {
        setHeader({
          position: "absolute",
          boxShadow: "none",
          transition: "all 0.65s",
          zIndex: "4",
          height: "130px",
          background: "transparent",
          width: "100%",
          paddingBottom: "1rem",
          width: "100%",
        });

        setNavLink({
          color: "white",
        });
      }
    });
  }, []);

  return (
    <Wrapper id="header" style={header}>
      <Container>
        <BigScreen>
          <HeaderContent>
            <Logo
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <LinkLogo>
                <Image src="./assets/logo.png" />
              </LinkLogo>
            </Logo>
            <Contact>
              <StyledNavLink style={navLink}>
                <HomeIcon sx={{ fontSize: 35 }} />
                Trang Chủ
              </StyledNavLink>
              <StyledNavLink style={navLink}>
                <NewspaperIcon />
                Tin Tức
              </StyledNavLink>
              <StyledNavLink style={navLink}>
                <ContactsIcon />
                Liên Hệ
              </StyledNavLink>
              {/* <Link
                to=""
                smooth={true}
                duration={1000}
                style={{
                  color: "white",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <HomeIcon sx={{ fontSize: 35 }} />
                Trang Chủ
              </Link>
              <Link
                to="news"
                smooth={true}
                duration={1000}
                style={{
                  color: "white",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <NewspaperIcon />
                Tin Tức
              </Link>
              <Link
                to=""
                smooth={true}
                duration={1000}
                style={{
                  color: "white",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <ContactsIcon />
                Lien He
              </Link> */}
            </Contact>
            <Log>
              <ButtonLog variant="contained">
                <StyledLink to={`/auth`}>Đăng nhập</StyledLink>
              </ButtonLog>
              <ButtonLog variant="contained">
                <StyledLink to={`/`}>Đăng ký</StyledLink>
              </ButtonLog>
            </Log>
          </HeaderContent>
        </BigScreen>

        <SmallScreen>
          <HeaderContent>
            <Logo
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <LinkLogo>
                <Image src="./assets/logo.png" />
              </LinkLogo>
            </Logo>
            <Contact>
              <Button
                onClick={() => {
                  setToggle(true);
                  setSubMenu({
                    display: "flex",
                  });
                }}
              >
                <MenuIcon style={navLink} sx={{ fontSize: "40px" }} />
              </Button>
              <MenuSmallScreen
                toggle={toggle}
                style={subMenu}
                className="menuSmallScreen"
              >
                <DivNormal
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                >
                  <Button
                    onClick={() => {
                      setToggle(false);
                      setSubMenu({
                        display: "none",
                      });
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "32px", color: "black" }} />
                  </Button>
                </DivNormal>
                <DivNormal>
                  <StyledNavLinkSmallScreen>
                    <HomeIcon sx={{ fontSize: 30 }} />
                    Trang Chủ
                  </StyledNavLinkSmallScreen>
                  <StyledNavLinkSmallScreen>
                    <NewspaperIcon />
                    Tin Tức
                  </StyledNavLinkSmallScreen>
                  <StyledNavLinkSmallScreen>
                    <ContactsIcon />
                    Liên Hệ
                  </StyledNavLinkSmallScreen>
                  <DivNormal
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "15px",
                      gap: "5px",
                    }}
                  >
                    <ButtonLog variant="contained">
                      <StyledLink to={`/auth`}>Đăng nhập</StyledLink>
                    </ButtonLog>
                    <ButtonLog variant="contained">
                      <StyledLink to={`/`}>Đăng ký</StyledLink>
                    </ButtonLog>
                  </DivNormal>
                </DivNormal>
              </MenuSmallScreen>
            </Contact>
          </HeaderContent>
        </SmallScreen>
      </Container>
    </Wrapper>
  );
}
