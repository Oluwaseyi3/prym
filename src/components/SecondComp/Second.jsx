import React from 'react'
import "./Second.css"
import galaxy from "../images/galaxy.png"
import chatbox from "../images/chatbox.png"

const Second = () => {
  return (
      <div className='secondbody'>
           <div className='galaxy'>
               <img src={galaxy} alt="" />
           </div>
           <div  className='chatbox'>
           <img src={chatbox} alt="" />
           </div>
      </div>
  
  )
}

export default Second