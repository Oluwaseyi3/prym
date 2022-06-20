import React, {useState} from 'react'
import "./NavBar.css"
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import small from "../images/small.png"
import art from "../images/art.png"
import * as FaIcons from "react-icons/fa"

import {AiFillCloseSquare} from "react-icons/ai"
import {BiMenuAltRight} from "react-icons/bi"
import {useMediaQuery, useTheme,} from '@mui/material';


const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const [sidebar, setSidear] = useState(false)

  const showSiderbar = () => setSidear(!sidebar)

  return (

   <div>
     {
      isMatch?
        <>
 
    
           {
            sidebar ?
            (  <div className='navbar'>
              <img src={small} alt=""/>
            <BiMenuAltRight size="2rem" onClick={showSiderbar}/>
            </div>) :
            <div className='active'>
                   <AiFillCloseSquare className='icon'  size="2rem"  onClick={showSiderbar}/>
                   <img src={art} alt="" onClick={showSiderbar}/>
                   <h3>Home</h3>
                   <h3>Contact Us</h3>
                   <h3>FAQs</h3>
                   <h3>Blogs</h3>
                   <h3>Sign Up</h3>
                   <h3>Login</h3>
            </div>
           }
           
      
       
      
      </>
      :(

      <div className='navbar-body' >
      <div className='nav-logo'>
          <img src={logo2} alt=""/>
      </div>
      <div className='nav-items'>
          <ul>
              <li>Home</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Blogs</li>
              <li className="but">Sign Up</li>
          </ul>
      </div>
  </div>)

    }
   </div>
  
  )
}

export default NavBar