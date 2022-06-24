import React from 'react'
import "./Third.css"
import secondimage from "../images/secondimage.png"
import logo2 from "../images/logo2.png"
import last from "../images/last.png"
import arrow1 from "../images/arrow1.png"
import live from "../images/live.png"
import bitcoin from "../images/bitcoin.png"
import eth from "../images/eth.png"
import video from "../images/video.png"
import head from "../images/head.png"
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

import {useMediaQuery, useTheme,} from '@mui/material';
import os from "../images/os.png"
import sos from "../images/sos.png"
import bac from "../images/bac.png"
import news from "../images/news.png"
import newsb from "../images/newsb.png"
import arrow from "../images/arrow.png"
import wallet from "../images/wallet.png"
import zag from "../images/zag.png"
import lil from "../images/lil.png"
import mobile from "../images/mobile.png"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

import {AiFillTwitterSquare} from "react-icons/ai"
const Thirdcomp = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div className='Thirdcomp'>
        <div>
            <div>
            <img src={news} alt=""   />
                <h3>Flicks</h3>
                <div className='p-div'>
                <p>With the new Prymshare flicks, you can upload short audios and videos for your followers to enjoy.</p>
              {!isMatch && <img src={arrow} alt="" className='arrow'/>}  
            </div>
            </div>
        </div>
        <div className='galaxys'>
        {
          isMatch?  <>
              <img src={os} alt="" className='os' />
               <img src={lil} alt="" className='lil' />
          </>  
           :  <> <img src={newsb} alt="" className='newsb'   />    <img src={secondimage} alt="" /></>
        }
       
        </div>
    </div>

    <div className='fourthComp'>
          <div className='fourthComp-one'>
          {
          isMatch?    <img src={sos} alt="" /> :    <> <img src={last} alt=""/>       <img src={wallet} alt="" className='wallet'  /></>  
        }
        
          </div>
          <div className='textdiv'>
          <img src={zag} alt="" className='zag'/>
               <h1>Wallet</h1> 
               <p>As a creator, you can now get tips from your followers and those tips can be accumulated and stored in your wallet.
              You can also keep your earnings for as long as you want and withdraw at anytime</p>
         
          </div>
    </div>


    <div className='crypto'>
    <div  className='cryptobox'>
    <h2>
      We also have upcoming features like live audio and video events and we will also enable cryptocurrency payments for our users
      </h2>
    </div>
    

      <img src={arrow1} alt="" className='arrow1'/>
      <img src={live} alt="" className='live'/>
      <img src={bitcoin} alt="" className='bitcoin'/>
      <img src={eth} alt="" className='eth'/>
      <img src={video} alt="" className='video'/>
      <img src={head} alt="" className='head'/>
    </div>


    <div className='journey'>
        <h1>Begin Your Journey Now</h1>
        {
          isMatch?   <img src={mobile} alt=""  /> :  <img src={bac} alt=""  />
        }
     
    </div>

    <div className="email">
        <div>
        <h1>Join our Waitlist</h1>
        <h4>Provide us your email & be the first to know when we launch </h4>
        </div>

        <div>
          <InputLabel>Email
           <Input placeholder=""/>
          </InputLabel>
        </div>
        
        <div>
          <a>Join List</a>
        </div>
    </div>

    <div className="footer">
       <div className='lo'><h2>prymshare</h2></div>
       <div className='rows'>
        <h4>prymshare.info@gmail.com</h4>
        <h4>Lagos, Nigeria</h4>
        <h4>Copyright Prymshare Media Inc 2022</h4>
       </div>
       <div className='rowse'>
        <div className='icondiv'><AiFillFacebook size="1rem"/>{!isMatch && <h4>facebook</h4> }</div>
        <div className='icondiv'><AiFillInstagram/>{!isMatch && <h4>instagram</h4> }</div>
        <div className='icondiv'><AiFillTwitterSquare/>{!isMatch && <h4>twitter</h4> }</div>
       </div>
    </div>
    </div>
    
  )
}

export default Thirdcomp