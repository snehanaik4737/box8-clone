import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import { Box } from "@chakra-ui/react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 530, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export const Slider2=()=> {
  return (
    <div className="slide">
      <Carousel breakPoints={breakPoints}>
        {arr.map((item,index)=>(

        <Item key={index}>
        <Box className="perdiv">
          <img style={{height:"100%", width:"100%"}} src={item.image} alt=""/>
         
        </Box>
          </Item>
        ))}
        
      </Carousel>
    </div>
  );
}



const arr=[
  {
    image:"https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/testimonials/Testimonial-01.jpg",
    
  },
  {
    image:"	https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/testimonials/Testimonial-02.jpg",
  
  },
  {
    image:"https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/testimonials/Testimonial-03.jpg",
    
  },
  {
    image:"	https://d2pc4443o2qatl.cloudfront.net/20220714174739/assets/testimonials/Testimonial-04.jpg",
   
  }
  

]