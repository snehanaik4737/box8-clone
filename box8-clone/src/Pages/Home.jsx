
import React from 'react'
import { Slider } from './Slider'
import image from "./landingPageSS.PNG"
import "./Home.css"
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Box, Center ,Stack ,Flex,Heading} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { ProductSimple } from './ProductSimple'
import { Slider2 } from './Slider2'
import { Slider3 } from './Slider3'
export const Home = () => {
const [data,setData]=useState([]);
const [error,setError]=useState("")
  useEffect(()=>{
   axios({
    url:"http://localhost:8080/allCategory",
    method:"GET"
   })
   .then((res)=>{
    setData(res.data.allCategory)
   // console.log(res.data)
   }).catch((err)=>{
    setError(err)
   })

  },[])

  return (
   <>
   <div style={{width:"100%",height:"350px",backgroundColor:"rgb(39,46,58)"}}>
    <Slider/>
   </div>
   <div style={{width:"100%",height:"500px"}}>
   <img style={{paddingTop:"60px"}} src={image} alt=""></img>

   </div>
   <div style={{display:"flex",width:"100%",backgroundColor:"rgb(255,241,236)"}}>

      <div className="gridFourdivs">
       <div className='fourDivs'>
        <img className='imgstyleInh4' src='https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/images/brand_features/time.png' alt=''></img>
        <h4 className="styleforh4">28 Minutes</h4>
        <p>Superfast Delivery. We reach you before the hunger does.</p>
       </div>
       <div className='fourDivs'>
        <img className='imgstyleInh4' src='https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/images/brand_features/meals.png' alt=""></img>
        <h4 className="styleforh4">2Cr+ Meals</h4>
        <p>served & we are not stopping!</p>
       </div>
       <div className='fourDivs'>
        <img className='imgstyleInh4' src='https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/images/brand_features/stores.png' alt=""></img>
        <h4 className="styleforh4">120+ Stores</h4>
        <p>across Mumbai, Bangalore, Pune, Delhi-NCR & Hyderabad.</p>
       </div>
       <div className='fourDivs'>
        <img className='imgstyleInh4' src='https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/images/brand_features/rating.png' alt=''></img>
        <h4 className="styleforh4">4.3</h4>
        <p>rated & 11000+ 5 star reviews that keep us motivated.</p>
       </div>

      </div>
      <div style={{width:"50%",paddingTop:"10%",textAlign:"left",paddingLeft:"1%"}}>
        <h2 className='desiMeals'>India’s Largest</h2>
        <h2 className='desiMeals'>Desi Meals Brand</h2>
        <p style={{fontSize:"1.2rem"}}>Irresistible meals in easy-to-carry boxes.
         All-in-1 meals, Biryanis, Curries, Parathas, Desserts & more delivered piping hot.</p>



      </div>

       
   </div>

   <h2 style={{textAlign:"center",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"2.5rem"}}>Order Now</h2>
     

   <Box>
      <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

      
      <Box>
       
        <Flex flexWrap="wrap" justifyContent="space-around">

          {data?.map((meal)=>(
           

            <Link key ={meal._id} to={`meals/${meal._id}`}> 
          <ProductSimple  key ={meal._id} {...meal}/>
          </Link>
          )
 
          )}
        </Flex>
 

      </Box>
      </Stack>
    </Box>

    <Box style={{backgroundColor:"rgb(255,241,236)",width:"100%"}}>
      <Box style={{width:"50%",display:"flex",margin:"auto"}}>

    <Heading style={{color:"red",textAlign:"center",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"2.5rem",paddingTop:"2%"}}>
    Over 20L+ happy customers
and counting...
    </Heading>
      </Box>
      <Box>
        <Slider2/>
      </Box>
    </Box>

    <Box style={{width:"100%"}}>
      <Box style={{width:"100%",display:"flex",margin:"auto",textAlign:"center",justifyContent:"center"}}>

    <Heading style={{color:"red",textAlign:"center",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"2.5rem",paddingTop:"2%"}}>
    What’s trending?
    </Heading>
      </Box>
      <Box>
        <Slider3/>
      </Box>
    </Box>
   </>
  )
}



