import styled from "styled-components";
import  Images  from '../../Assets/Index';
import Container from '@mui/material/Container';


export const HeroSection = styled.div`
  background: url(${Images.hero}) no-repeat;
  background-size: cover;
height:100vh;
width:100%;
  overflow-x: hidden;
`;

export const HeroContent = styled.div`
width:50%;
height:calc(100vh - 100px);
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width: 768px) {
 width:100%;
  }
`
export const Par = styled.p`
  color:#fff;
    margin-top:50px;
    margin-bottom:50px;
    font-size:25px;
`
  
    
export const H1 = styled.h1`
 font-size:80px;
 display:flex;
 flex-direction:column;
 color:#fff;
justify-content :start;
line-height:.9;
 span{
    color:#D1094B;
}
@media screen and (max-width: 768px) {
 font-size:60px;
  }
`