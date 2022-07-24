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

export const Slider3=()=> {
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
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/590",
    
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/591",
  
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/463",
    
  } 

]