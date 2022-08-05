import React from "react";
import HomeSignup from "../HomeSignup/HomeSignup";
import LinkSectionFooter from "../LinkSectionFooter/LinkSectionFooter";
import { CustomHome } from "./Footer.style";



const Footer:React.FC=()=>{
return(
    <CustomHome>
        <HomeSignup/>
        <LinkSectionFooter/>
    </CustomHome>
)
}
export default Footer