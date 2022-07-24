import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    useDisclosure,
    Box,
  Flex,
  Image,
  Text,
    Button,
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { deleteProductCart, fetchCart } from "../Redux/cart/action";
import { Link, useNavigate } from "react-router-dom";
  
  export const Cart = () => {
    const cartData=useSelector((store)=>store.cartData.cart)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
const handleget=()=>{
    onOpen();
    dispatch(fetchCart()) 
}
const removeProduct=(id)=>{
  dispatch(deleteProductCart(id))
}

const  navigateCheckout=()=>{
  navigate("/checkout", {replace:true})
}
    console.log("cartadat",cartData)
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box>
        <Button
        background={'none'}
          rounded={"none"}
          w={"full"}
         
          size={'sm'}
          py={"3"}
         
        //   bg={useColorModeValue("gray.900", "gray.50")}
        //   color={useColorModeValue("white", "gray.900")}
        //   textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          onClick={handleget}
        >
        Cart
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader></ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              {cartData?.map((product) => {
                return (
                    <Box key={product._id} mb='1rem' borderBottom={'1px solid black'} >
                        <Flex>

                      <Box style={{fontWeight:"bolder",fontSize:"20px" ,color:"darkblue",marginBottom:"2%",marginRight:"7%"}}>{product.meal_name}</Box>
                      <Button variant="solid"  onClick={()=>removeProduct(product._id)}>
                 <DeleteIcon/>
                  </Button>
                        </Flex>
                    <Flex>
                      {/* <Box>
                        <Image
                        border={'1px solid black'}
                        rounded='lg'
                          src={product.image}
                          objectFit={"contain"}
                          alt="product image"
                          boxSize={"100px"}
                        />
                      </Box> */}
                      <Box style={{marginBottom:"2%"}}>{product.meal_desc}</Box>
                      <Box maxW={'250px'} ml='1rem'>
                          <Text fontSize={"lg"} color='red'>₹{product.meal_price}</Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </ModalBody>
  
            <ModalFooter>
              
              <Button colorScheme="blue" mr={3} onClick={navigateCheckout} >
             
               Confirm
              </Button>
             
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  };
  