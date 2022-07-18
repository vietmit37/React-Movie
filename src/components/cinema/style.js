import { StyledLink } from "components/header/style";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;
const StyledImg = styled.img``;

const ListCinema = styled.div`
  // width: 400px;
  display: flex;
  gap: 10px;
`;

const DivNormal = styled.div``;

const FlexDiv = styled.div`
  display: flex;
`;

const TitleCinema = styled.div`
  text-align: left;
  margin-left: 2px;
`;

const ContentCinema = styled.p`
  color: black;
  font-size: 16px;
  margin-bottom: 5px;
`;

const DivMovie = styled.div`
  margin-left: 4px;
`;

const TitleMovie = styled.h1`
  color: black;
`;

const StyledP = styled.p`
  color: #d33333;
  font-size: 14px;
`;

const DetailIcon = styled(StyledLink)`
  &: hover {
    background-color: white !important;
  }
`;

export {
  StyledImg,
  ListCinema,
  TitleCinema,
  ContentCinema,
  DivNormal,
  StyledDiv,
  FlexDiv,
  DivMovie,
  TitleMovie,
  StyledP,
  DetailIcon,
};
