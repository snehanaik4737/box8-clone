
import React from 'react'
import { Slider } from './Slider'
import image from "./landingPageSS.PNG"

export const Home = () => {
  return (
   <>
   <div style={{width:"100%",height:"350px",backgroundColor:"rgb(39,46,58)"}}>
    <Slider/>
   </div>
   <div style={{width:"100%",height:"500px"}}>
   <img style={{paddingTop:"60px"}} src={image} alt=""></img>

   </div>
   <div style={{width:"100%",height:"500px",backgroundColor:"rgb(255,241,236)"}}>

   </div>
   </>
  )
}
