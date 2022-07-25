import { Box, Icon, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink }   from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { BsPercent,BsFillPersonFill} from "react-icons/bs";
import { Cart } from "./Cart";
import { CartCounter } from "./CartCounter";
export const Navbar = () => {
  
  return (
    <>
      <Box style={{ width: "100%", display: "flex"}}>
        <Box style={{ width: "70%", display: "flex", margin: "2%" }}>
        
          <Image
            style={{ width: "15%", height: "100%", marginLeft: "4%" }}
            src="https://d2pc4443o2qatl.cloudfront.net/20220625101743/assets/images/logo.png"
          ></Image>
        
          <input
            style={{
              border: "0.2px solid gray",
              padding: "5px",
              fontSize: "17px",
              marginLeft: "8%",
            }}
            type="text"
            placeholder="Enter delivery location"
          ></input>
        </Box>

        <Box
          style={{
            display: "flex",
            width: "30%",
            margin:"1.5%",
            justifyContent: "space-between",
           
             paddingTop:"1%"
           
          }}
        >
          <Box>Eatclub</Box>
          <div  style={{width:"1px",height:"70%",backgroundColor:"gray"}}></div>
          <Box style={{ display: "flex" }}>
            <BsPercent style={{ width:"20px",height:'20px'}}></BsPercent>
            <Box position="relative" padding="0 0.5rem 0 0">
              Deals
            </Box>
          </Box>
          <div  style={{width:"1px",height:"70%",backgroundColor:"gray"}}></div>
          <Box style={{ display: "flex" }}>
            {/* <Link as={RouterLink} to="/cart"> */}
            <Icon as={BsCart3} boxSize="2rem" style={{ width:"25px",height:'25px'}}></Icon>

             
            <Box position="relative" padding="0 0.5rem 0 0" >
            <Cart/>
            <CartCounter />
            
            </Box>

            {/* </Link> */}
          </Box>
          <div  style={{width:"1px",height:"70%",backgroundColor:"gray"}}></div>

          <Box style={{ display: "flex" }}>
            {/* <Link as={RouterLink} to="/cart"> */}
         <BsFillPersonFill style={{ width:"25px",height:'25px'}}/>
         <Link as={RouterLink} to="/signup">
            <Box position="relative" padding="0 0.5rem 0 0">
             Sign in
              {/* <CartCounter /> */}
            </Box>
          </Link>
            
          </Box>
            {/* </Link> */}
         
        </Box>
      </Box>
    </>
  );
};
