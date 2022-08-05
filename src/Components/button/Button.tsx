import React from 'react'
import {StyledButton} from './Style'

interface PropsButoon {
      name:string
    outline?: any
}
export default function Button({outline, name}:PropsButoon) {
    return (
        <>
               <div>
   
                <StyledButton outline={outline}>{ name}</StyledButton>
  </div>
      </>
 
  )
}
