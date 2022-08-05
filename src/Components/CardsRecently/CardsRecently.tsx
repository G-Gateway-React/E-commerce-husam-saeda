import React from "react";
// import { Card } from "@mui/material"
import Images from '../../Assets/Index' ;
import MediaControlCard from "../CardResently/CardResently";
import {
  CardsHeader,
  CardsRecentlySection,
  CustomCard,
} from "./CardsRecently.style";

const CardsRecently: React.FC = () => {
  // console.log(typeof Images);
  return (
    <CardsRecentlySection>
      <CardsHeader>NEW BOOTS ADDED RECENTLY</CardsHeader>
      <CustomCard sx={{ display: "flex" }}>
        <MediaControlCard link={Images.mask} />
        <MediaControlCard link={Images.mask1} />
        <MediaControlCard link={Images.mask2} />
        <MediaControlCard link={Images.mask3} />
      </CustomCard>
    </CardsRecentlySection>
  );
};
export default CardsRecently;
