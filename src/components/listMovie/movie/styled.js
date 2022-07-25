import styled from "styled-components";
import Typography from "@mui/material/Typography";

const TitleMovie = styled(Typography)`
  height: 100px;
`;

const StyledImg = styled.img``;

const NameTag = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const DescriptionTag = styled.p`
  margin-bottom: 0.75rem;
`;
const TagA = styled.a`
  display: inline-flex;
  align-items: center;
  color: #3f51b5;
`;

const StyledDiv = styled.div`
  // width: 100% !important;
  height: 380px;
  background-color: rgb(243 244 246);
  padding: 2rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  border-radius: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const FlipCardDiv = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  &:hover {
    #inner {
      transform: rotateY(180deg);
    }
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FlipCardFront = styled.div`
  background-color: #bbb;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  transform: rotateY(180deg);
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const TagSpan = styled.span``;

export {
  TitleMovie,
  StyledImg,
  NameTag,
  DescriptionTag,
  TagA,
  StyledDiv,
  FlipCardDiv,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  TagSpan,
};
