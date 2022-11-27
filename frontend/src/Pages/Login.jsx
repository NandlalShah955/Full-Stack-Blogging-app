import React,{useState} from 'react'
import axios from 'axios'
import {
  Button,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
function Login() {
  const [loginDetails, setloginDetails] = useState([])
  const handleChange=(e)=>{
const {name,value}=e.target;
setloginDetails({...loginDetails,[name]:value})
  }
  const handlelogin=(e)=>{
e.preventDefault()
axios.post({
  method: 'POST',
  url:`http://localhost:8080/user/login`,
  data:loginDetails,
})

  }

  
  
  
  const {email, password}=loginDetails
  
  return (
    <Stack>
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
      <VStack justify="center">
        <Img src="https://th.bing.com/th/id/OIP.g_U9qq46tlzGLfUXCepJQAHaEM?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      </VStack>
      <VStack spacing={10} h="80vh" p={10}>
        <form > 
        {/* onSubmit={formik.handleSubmit} */}
          <label htmlFor="email">Email Address</label>
          <Input
            rounded="false"
            id="email"
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
          <Button colorScheme="blue" w="100%" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
    </SimpleGrid>
  </Stack>
  )
}

export default Login