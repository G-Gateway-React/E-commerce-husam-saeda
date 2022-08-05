import styled from "styled-components";
import { Flex } from "../../Global.style";



export const HomeSignupContainer = styled(Flex)`
    flex-direction:column;
`;
export const SignupHeader = styled.h3`
  letter-spacing: 0.04em;
  color: #000f08;
`;
export const SignupPara = styled.p`
  color: #000000;
`;
export const InputContainer=styled(Flex)`
        border-bottom: 1px solid #D8D8D8;
        height:1.5rem;
        width:30rem;
        justify-content:space-between;
`
export const Input =styled.input`
    border:none;
    outline:none;
`
export const InputJoin=styled.h1`
    letter-spacing: 0.04em;
    font-size:1rem;
    color: #000F08; 
    cursor: pointer;    
`