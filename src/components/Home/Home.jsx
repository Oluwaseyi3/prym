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
      <div className='home-body-one'>
         <div className='text'>
           <h1>
           This is the home<br/>
            of content<br/>
           Where your content is 
           </h1>

           <a>Sign Up</a>
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