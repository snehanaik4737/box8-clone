import React from 'react'
import {Box} from "@chakra-ui/react"
import "./Footer.css"
export const Footer = () => {
  return (
   <>
   <Box w={'100%'} background={'black'} display={'flex'} justifyContent={'space-around'}>
    <Box  textAlign={'left'} className='footer' >
        <h2  style={{color:"white", fontSize:"1.5rem"}}>
        BOX8
        </h2>
        <a href='null'>ABOUT US</a>
        <br></br>
        <a href='null'>HELP & SUPPORT</a>
        <br></br>
        <a href='null'>CONTACT  US</a>
        <br></br>
        <a href='null'>DELIVERY POLICIES</a>
        <br></br>
        <a href='null'>PRIVACY POLICIES</a>
    </Box>
    <Box textAlign={'left'} className='footer'>
    <h2 style={{color:"white", fontSize:"1.5rem"}}>
        EXPLORE
        </h2>
        <a href='null'>OFFERS</a>
        <br></br>
        <a href='null'>BLOG</a>
        <br></br>
        <a href='null'>DISCLAIMERS</a>
        <br></br>
        <a href='null'>REFER & EARN</a>
       
    </Box>
    <Box className='footer'>
    <h2 style={{color:"white", fontSize:"1.5rem"}}>
       FOLLOW
        </h2>
        <img src="https://image.flaticon.com/icons/png/128/1384/1384053.png" alt="facebook"/>
        <img src="https://image.flaticon.com/icons/png/128/1409/1409937.png" alt="twitter"/>
       
    </Box>


   </Box>
   </>
  )
}
