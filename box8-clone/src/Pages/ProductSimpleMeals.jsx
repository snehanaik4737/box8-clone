import { Box, Button, Center, Heading, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProductCart } from "../Redux/cart/action";



export const ProductSimpleMeals=(props) =>{

  const dispatch=useDispatch()
   // console.log(props,"props")

   const handleaddCart=(payload)=>{
    alert("Your meal is added to cart")

   dispatch(addProductCart(payload))

   }

    return (
      <Center py={12}>
        <Box
         textAlign={"left"}
          role={'group'}
          p={6}
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
         
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${""})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={props.meal_image}
            />
          </Box>
          <Stack pt={10} >
           
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {props.meal_name}
            </Heading>
           
            <p fontSize={'1xl'} fontFamily={'body'} fontWeight={400}>
             {props.meal_desc}
            </p>
            <Box display={'flex'} justifyContent={'space-around'}>

            <h2 style={{fontFamily:"inherit",fontSize:"2rem"}}>₹{props.meal_price}</h2>
            <Button style={{border:"2px solid pink", color:"darkorange",background:"none"}} onClick={()=>handleaddCart(props)}>ADD</Button>
            </Box>
           
          </Stack>
        </Box>
      </Center>
    );
  }
  