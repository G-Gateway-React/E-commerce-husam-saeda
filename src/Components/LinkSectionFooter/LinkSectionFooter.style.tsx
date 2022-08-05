import styled from "styled-components";
import { Flex } from "../../Global.style";

export const LinkSectionFooterContainer=styled(Flex)`
    align-items:flex-start;
    justify-content:space-around;
    width: 100%;
`
export const LinkColumnContainer = styled(Flex)`
  flex-direction: column;
  align-items:flex-start;
  justify-content:space-between;
  width:20%;
  margin-top:5rem;
`;
export const LinkHeaderText = styled.h1`
  font-size: 20px;
  color: #000000;
  margin-bottom:2rem;
`;
export const LinkContent = styled(Flex)`
  flex-direction: column;
  align-items:flex-start;
`;
export const LinkContentText = styled.p`
  font-weight: 100;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
`;
