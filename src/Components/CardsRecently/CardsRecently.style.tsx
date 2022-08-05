import { Card } from "@mui/material";
import styled from "styled-components";
import { Flex } from "../../Global.style";

export const CustomCard = styled(Card)`
  width: 100%;
`;
export const CardsHeader = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 48px;
  letter-spacing: 0.04em;
  text-align:left;
  color: #000000;
`;
export const CardsRecentlySection=styled(Flex)`
    flex-direction:column;
    width:90%;
    align-items: flex-start;
    height:85vh;
`