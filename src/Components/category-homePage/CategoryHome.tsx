
import { Title , Image ,ImageListItemCategory ,H5  } from './Style'
import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// import {Container} from './Style'
// import Card from '../../Components/card-category-home/Card'
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    id:1,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    id:2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      id:3,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      id:4,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      id:5,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      id:6,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      id:7,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      id:8,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      id:9,
  },
  
 
];


export default function CategoryHome() {
    return (
      <>
        <Container maxWidth="lg">
        <Title> <span>CATEGOR</span>IES</Title>
         <Grid container spacing={2}>
     
      {itemData.map((item) => (
        <Grid item lg={4} md={4} sm={6} xs={12} key={item.img}>
          <ImageListItemCategory >
          <Image
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
              />
            <H5>{item.title}</H5>
             </ImageListItemCategory>
        </Grid>
        //   <Card key={item.img} name={ item.title} url ={`${item.img}?w=164&h=164&fit=crop&auto=format`} />
      ))}
        
          </Grid>
          </Container>
            </>
  );
}

