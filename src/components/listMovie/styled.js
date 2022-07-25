import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const TitleList = styled(Typography)`
  text-align: center;
`;

const DivArrow = styled.div`
  &::before {
    color: gray !important;
    font-size: 25px !important;
  }
  color: black;
`;
const StyledDiv = styled.div``;

const StyleButton = styled(Button)`
  background-color: ${(props) =>
    props.active ? "#2d3748 !important" : "#edf2f6 !important"};
  color: ${(props) =>
    props.active ? "white !important" : "#2d3748 !important"};
  margin-right: 10px !important;
  padding: 0.75rem 2rem !important;
  margin-bottom: 1rem !important;
  &:hover,
  &:focus {
    color: palevioletred !important;
    font-weight: bold;
    transition: all 0.3s;
    background-color: #2d3748 !important;
  }
  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export { TitleList, StyledDiv, DivArrow, StyleButton };
