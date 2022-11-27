import React from 'react'
import { useState } from 'react';
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {
  Button,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";

function Signup() {
 const navigate=useNavigate()
  const [signupdetails, setsignupdetails] = useState([])
  const {email, password, username ,age=""} = signupdetails;
  
  
  const handleChange=(e)=>{
const {name,value}=e.target;
setsignupdetails=({...signupdetails,[name]:value})
  }
  const handlesubmit=(e)=>{
e.preventDefault();
axios({method:"POST",
url:`http://localhost:8080/user/signup`,
data:signupdetails,
}).then((res)=>{
  console.log(res.data.token)
  navigate('/login')
  
})
  }
  return (
    <Stack>
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
      <VStack justify="center">
        <Img src="https://th.bing.com/th/id/OIP.g_U9qq46tlzGLfUXCepJQAHaEM?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" mt={-40}/>
      </VStack>
      <VStack spacing={10} h="80vh" p={10}>
        <form onSubmit={handlesubmit}> 
        
          <label htmlFor="name">Name</label>
          <Input
            rounded="false"
           
            name="username"
            type="text"
             onChange={handleChange}
             value={username}
            mb={5}
          />
          <label htmlFor="email">Email Address</label>
          <Input
            rounded="false"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            mb={5}
          />
          <label htmlFor="password">Password</label>
          <Input
            rounded="false"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            mb={5}
          />
          <label htmlFor="password">Age</label>
          <Input
            rounded="false"
            mb={5}
            width='200px'
            type='Number'
            value={age}
            name={age}
            onChange={handleChange}

          />
            <label htmlFor="password">Gender</label>
         <select>Gender
          <option value="Male">Male</option>
          <option value="Female">Female</option>
         </select>
          

          <Button colorScheme="blue" w="100%" type="submit">
            Submit
          </Button>
          <Button colorScheme="blackAlpha" w="100%" type="submit" mt='20px' gap={3}>
           <BsGithub  size={25}/> Signup Using Github
          </Button>
          <Button colorScheme="red" w="100%" type="submit" mt='20px' gap={3} >
            <AiOutlineGoogle size={25}/>Signup using google
          </Button>
        </form>
      </VStack>
    </SimpleGrid>
  </Stack>
  )
}

export default Signup