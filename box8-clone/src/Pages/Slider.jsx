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

export const Slider=()=> {
  return (
    <div className="slide">
      <Carousel breakPoints={breakPoints}>
        {arr.map((item)=>(

        <Item>
        <Box className="perdiv">
          <img style={{height:"100%", width:"100%"}} src={item.image} alt=""/>
         
        </Box>
          </Item>
        ))}
        {/* <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item> */}
      </Carousel>
    </div>
  );
}



const arr=[
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1072",
    
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1081",
  
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1071",
    
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1082",
   
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1052",
    
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/584",
   
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1055",
   
  },
  {
    image:"https://assets.box8.co.in/horizontal-rectangle/web/banner/1080"
  }

]