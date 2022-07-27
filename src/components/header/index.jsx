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
  TitleH3
} from "./styled";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DivNormal } from "components/cinema/styled";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";


export default function Header(props) {
  const [header, setHeader] = useState({
    position: "absolute",
    background: "transparent",
    width: "100% !important",
    zIndex: "100",
    width: "100%",
  });


  const user = useSelector(state => state.authReducer);

  const renderAvatar = (user) => {
    
      if(localStorage.getItem('UserCustomer')) {
        return (
          <>
            <DivNormal>
            <TitleH3 style={navLink}>Hello, {user}</TitleH3>
          </DivNormal>
          <ButtonLog variant="contained" onClick={() => {
            localStorage.removeItem('UserCustomer')
          }}>
            <StyledLink to={``}>Đăng xuất</StyledLink>
          </ButtonLog>
          </>
        )
      } else {
        return  (
          <>
              <ButtonLog variant="contained">
                <StyledLink to={`/auth`}>Đăng nhập</StyledLink>
              </ButtonLog>
              <ButtonLog variant="contained">
                <StyledLink to={`/register`}>Đăng ký</StyledLink>
              </ButtonLog>
          </>
        )
      }

  }


  const renderAvatarSmallScreen = (user) => {
    
    if(localStorage.getItem('UserCustomer')) {
      return (
        <>
          <DivNormal>
          <TitleH3 style={{
            color: 'black',
            marginRight: '0px',
            textAlign: 'center'
          }}>Hello, {user}</TitleH3>
        </DivNormal>
        <ButtonLog variant="contained" onClick={() => {
          localStorage.removeItem('UserCustomer')
        }}>
          <StyledLink to={``}>Đăng xuất</StyledLink>
        </ButtonLog>
        </>
      )
    } else {
      return  (
        <>
            <ButtonLog variant="contained">
              <StyledLink to={`/auth`}>Đăng nhập</StyledLink>
            </ButtonLog>
            <ButtonLog variant="contained">
              <StyledLink to={`/register`}>Đăng ký</StyledLink>
            </ButtonLog>
        </>
      )
    }

}


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
                <Image src="../img/logo.png" />
              </LinkLogo>
            </Logo>
            <Contact>
              <StyledNavLink style={navLink} to="/">
                <HomeIcon sx={{ fontSize: 35 }} />
                Trang Chủ
              </StyledNavLink>
            </Contact>
            <Log>
              {renderAvatar(user?.userLogin.taiKhoan)}
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
                <Image src="../img/logo.png" />
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
                  <StyledNavLinkSmallScreen to="/">
                    <HomeIcon sx={{ fontSize: 30 }} />
                    Trang Chủ
                  </StyledNavLinkSmallScreen>

                  <DivNormal
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "15px",
                      gap: "5px",
                    }}
                  >
                    {renderAvatarSmallScreen(user?.userLogin.taiKhoan)}
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
