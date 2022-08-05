import styled from "styled-components";
import PropsButoon  from "./Button"
interface PropsButoon {
  outline: string;
}
export const StyledButton= styled.button<PropsButoon>`
    background-color: ${(props) => (props.outline ? '#0000004d' : '#000')} ;

  color:#fff;
width:267px;
height:50px;
  font-size: 1em;
 
  padding: 0.25em 1em;
  border: 2px solid #fff;
  border-radius: 3px;

`;
