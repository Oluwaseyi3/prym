import React from 'react'
import "./Second.css"
import galaxy from "../images/galaxy.png"
import chatbox from "../images/chatbox.png"
import ba from "../images/ba.png"
import bb from "../images/bb.png"
import bc from "../images/bc.png"
import slant from "../images/slant.png"
import {useMediaQuery, useTheme,} from '@mui/material';

const Second = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
      <div className='secondbody'>
           <div className='galaxy'>
           {
          isMatch?  
            <img src={slant} alt=""  /> : <img src={galaxy} alt="" />
        }
              
           </div>
            <img src={ba} alt=""  className='ba' />
            <img src={bb} alt=""  className='bb' />
           <img src={bc} alt=""  className='bc' />  
           <div  className='chatbox'>
          
           <img src={chatbox} alt="" />
           </div>
      </div>
  
  )
}

export default Second