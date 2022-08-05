import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Helvetica Neue LT Std";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
}

`;

export default GlobalStyle;
