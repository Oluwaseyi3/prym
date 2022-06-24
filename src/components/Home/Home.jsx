import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Home.css"
import one from "../images/one.png"
import two from "../images/two.png"
import three from "../images/three.png"
import four from "../images/four.png"
import ha from "../images/ha.png"
import hb from "../images/hb.png"
import hash from "../images/hash.png"
import dash from "../images/dash.png"

const Home = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))


  return (
    <div>
       <div className='home-body'>
       <img src={ha} alt="" className='ha'/>
       <img src={hash} alt="" className='hash'/>
       <img src={hb} alt="" className='hb'/>
      <div className='home-body-one'>
         <div className='text'>
           <h1>
           This is the home<br/>
            of content<br/>
           Where your content <br/>
           is <span>shared  <br/> </span> <img src={dash} alt="" />
           </h1>
          
           <a>Join Waitlist</a>
         </div>
    
     
        
       
      </div>
      <div className='home-body-two'>
        <img src={one} alt=""   />
        <img src={two} alt="" />
        <img src={three} alt="" />
      
        <img src={four} alt="" />
     
       
        </div>
    </div>
    
    </div>
   
  )
}

export default Home