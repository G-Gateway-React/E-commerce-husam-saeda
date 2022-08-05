import React, {  useState } from "react"
import LinkColumn from "./LinkColumn";
import { LinkSectionFooterContainer } from "./LinkSectionFooter.style";

type Data={
    header:string;
    content:string[];
}


const LinkSectionFooter:React.FC =()=>{
    const [data,setData]=useState<Array<Data>>([{header:"CUSTOMER SERVICE",content:["CONTACT",'TRACK ORDER','DELIVERY & RETURNS',' PAYMENTS',"MAKE A RETURN","FAQ"]},{header:"INFO",content:["GIFT VOUCHERS",'SIZE GUIDE','CAREERS',' ABOUT US',"GUIDE","LEGAL POLICIES"]},{header:"FOLLOW US",content:["FACEBOOK",'INSTAGRAM']},{header:"CONTACT US",content:["HELLO @SHOESLY.COM",'+972597097813']}])
    return (
        <LinkSectionFooterContainer >
            {data.map(ele=>{
                return(
                    <LinkColumn key={ele.header} data={ele} />
                )
            })  }
         </LinkSectionFooterContainer>
     )
}
export default LinkSectionFooter