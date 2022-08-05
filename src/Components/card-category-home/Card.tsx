import React from 'react'
// import pic from 'javascript:void(0)'
import {Image , CardCategory} from './Style'

type CardProps = {
    name: string,
    url: string,
     
}
export default function Card(props :CardProps ) {
    return (
  <CardCategory>
            <Image src={props.url} alt="" />
            <h6>{props.name }</h6>      
  </CardCategory>
        
  )
}
