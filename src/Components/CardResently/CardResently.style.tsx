import styled from "styled-components";
import { Flex } from "../../Global.style";

interface Hover{
    hover:boolean
}
export const Button = styled.button<Hover>`
  position: absolute;
  bottom:2rem;
  right:3rem;
  font-family: "Helvetica Neue LT Std";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
    background:none;
  border: none;
  /* border:none; */
  display:${props=> props.hover? "block" : "none"};
  &:hover{
    display:block;
  }
`;

export const CustomCard = styled(Flex)`
  &:hover {
    transform: scale(1, 1.2);
    cursor: pointer;
  }
`;
