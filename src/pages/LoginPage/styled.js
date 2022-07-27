import styled from "styled-components";
import { Button } from "@mui/material";
import { StyledLink } from "components/header/styled";

const TitleTag = styled.h1`
  text-align: center;
`;

const StyledButton = styled(Button)`
  padding: 10px 25px !important;
  background-color: #2d3748 !important;
  margin: auto;
`;

const StyledLinkNew = styled(StyledLink)`
  color: #1976d2 !important;
  text-decoration: underline rgba(25, 118, 210, 0.4);
`;

export { TitleTag, StyledButton, StyledLinkNew };
