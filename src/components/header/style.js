import styled from "styled-components";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Wrapper = styled.div``;

const Container = styled.div`
  padding: 1rem;
  margin: auto;
  width: 80%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
`;

const LinkLogo = styled.a``;

const Image = styled.img`
  width: 100%;
`;

const Contact = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-weight: medium;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: white;
  &:hover,
  &:focus {
    color: palevioletred !important;
    font-weight: bold;
    transition: all 0.3s;
  }
  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

const Log = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonLog = styled(Button)`
  color: white !important;
  font-size: 18px;
  background-color: #2d3748 !important;
`;

const StyledLink = styled(Link)`
  color: white !important;
  &:hover,
  &:focus {
    color: palevioletred !important;
    font-weight: bold;
    transition: all 0.3s;
    // background-color: #2d3748 !important;
  }
  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

const SubMenu = styled(MenuIcon)`
  color: black !important;
  fontsize: 35px;
`;

const SmallScreen = styled.div`
  display: none;

  @media (max-width: 872px) {
    display: block;
  }
`;

const BigScreen = styled.div`
  display: block;
  @media (max-width: 872px) {
    display: none;
  }
`;

const MenuSmallScreen = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 67%);
  width: 200px;
  height: 100vh;
  right: -210px;
  top: 0;
  opacity: 0;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.toggle) {
      return ` right: 0 ;
      opacity: 1;`;
    } else {
      return `
        right: -210px;
        opacity: 0;
      `;
    }
  }}
`;

const StyledNavLinkSmallScreen = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-weight: medium;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: black;
  &:hover,
  &:focus {
    color: palevioletred;
    font-weight: bold;
    transition: all 0.3s;
  }
`;

export {
  Wrapper,
  Container,
  HeaderContent,
  Logo,
  Image,
  LinkLogo,
  StyledNavLink,
  ButtonLog,
  Log,
  Contact,
  SmallScreen,
  BigScreen,
  SubMenu,
  StyledLink,
  MenuSmallScreen,
  StyledNavLinkSmallScreen,
};
