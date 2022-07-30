import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    width: 100%;
    overflow-x: hidden;
  }
  :root {
      font-size: 18px;

      @media only screen and (max-width: 768px) {
        font-size: 14px !important;
        overflow-x: auto;
        
      }

      @media only screen and (max-width: 960px) {
        font-size: 12px !important;
        overflow-x: auto;

      }

      @media only screen and (max-width: 1024px) {
        font-size: 16px !important;
        overflow-x: auto;
      }

      @media only screen and (max-width: 1200px) {
        overflow-x: auto;
      }

      @media only screen and (max-width: 375px) {
        overflow-x: auto;
      }

      @media only screen and (max-width: 414px) {
        overflow-x: auto;
      }
    }
`;

export default Global;
