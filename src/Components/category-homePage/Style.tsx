import styled from "styled-components";

export const Container = styled.div`
`
export const Title = styled.h3`
font-size:40px;
padding:5px;
span{
    background-color:#D1094B;
}
`
export const Image = styled.img`
width:100%;
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
  &:hover{
   filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    
  }
`

export const H5 = styled.h5`
  position:absolute;
  top:60%;
  // text-align:center;
  width:100%
  margin:0 auto; 
    left:50%;
    transform:translate(-50%, -50%);
  visibility:hidden;
  color:#fff;
  font-size:30px;
`
export const ImageListItemCategory = styled.div`

position:relative;

  &:hover ${H5}{
  visibility:visible;
  }
   
`
