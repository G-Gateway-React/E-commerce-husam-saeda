import React from 'react'
import { HeroSection, H1, Par, HeroContent  } from "./Style"
import Container from '@mui/material/Container';
import ResponsiveAppBar from "../navbar/Navbar"
// import Navbar from "../navbar/Navbar"
import Button from "../button/Button"
export default function Hero() {
  return (
   <HeroSection>
             {/* <Container > */}
           
          <Container maxWidth="lg">
               <ResponsiveAppBar />
            <HeroContent>
                <H1>
                    <span>NEW</span>
                    COLLECTION
                    </H1>                
               
                <Par>Our Easiest Chuck-On-And-Go Staples Come With A Serious Style Heritage That’s Liberating, Sexy, Comfy And Supremely Cool.
          </Par>
          <Button outline={true} name='SHOP NEW ARRIVELS'/>
              </HeroContent>
              </Container>
                {/* </Container> */}
        </HeroSection>
  )
}
