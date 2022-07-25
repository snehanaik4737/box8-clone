import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/auth/action';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
  
  export default function SignupCard() {

      const auth=useSelector((store)=>store.auth.isAuth)
      const dispatch=useDispatch();
      const navigate=useNavigate()
    const [name, setName] = useState("");
    // const [lastName,setLastName] =useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [description,setDescription] =useState("sne");
    const [username,setUserName] =useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleName=(e)=>{
     setName(e.target.value)
    }
    const hanleUserName=(e)=>{
        setUserName(e.target.value)
    }
    const handleMobile=(e)=>{
        setMobile(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }


    const payload={
      name,
      email,
      mobile,
      password,
      description,
      username
    }
      const formSubmit=(e)=>{
        e.preventDefault();
        dispatch(registerUser(payload))
      }
    
    if(auth){
      navigate("/",{replace:true})
    }

  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <form onSubmit={formSubmit}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={name} onChange={handleName} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" value={username} onChange={hanleUserName} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="number" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input type="number" value={mobile} onChange={handleMobile} />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={handleEmail} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePassword} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Link as={RouterLink} to="/login">
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
                </Link>
              </Stack>
          </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }