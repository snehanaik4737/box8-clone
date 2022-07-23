import { Box, Center, Heading, Image, Stack, useColorModeValue } from "@chakra-ui/react";



export const ProductSimple=(props) =>{

    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
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
              backgroundImage: `url(${props.category_image})`,
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
              src={props.category_image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
           
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {props.category_name}
            </Heading>
           
            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={400}>
             {props.desc}
            </Heading>
           
          </Stack>
        </Box>
      </Center>
    );
  }
  