import React,{useState} from 'react'
import axios from 'axios'
import {
  Button,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
  Text
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
      <Text fontSize='3xl'>Please Enter Writer id no to delete the writer</Text>
      <form > 
        {/* onSubmit={formik.handleSubmit} */}
          <label htmlFor="id">ID No.</label>
          <Input
            rounded="false"
          
            name="number"
            type="text"
            //  onChange={delete}
            //  value={id}
            mb={5}
          />
         
          <Button colorScheme="blue" w="100%" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
      <VStack spacing={10} h="80vh" p={10}>
         <Text fontSize='3xl'>Please Enter Writer Details to  Create a Writer</Text>
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