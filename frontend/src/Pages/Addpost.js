import React from 'react'
import {
  Button,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
  Link,
  Text,
} from "@chakra-ui/react";
function Addpost() {
  return (
    <>
   <Text fontSize='4xl' as='cite'>Welcome Writer</Text>
   
   
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
      <VStack justify="center">
        <Img src="https://th.bing.com/th/id/OIP.0nSMFRbAWOq-pyge1amQqwHaF1?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      </VStack>
      <VStack spacing={10} h="80vh" p={10}>
        <form> 
        
          <label htmlFor="name">Image Link</label>
          <Input
            rounded="false"
           
            name="username"
            type="text"
            //  onChange={handleChange}
            //  value={username}
            mb={5}
          />
          <label htmlFor="email">Title</label>
          <Input
            rounded="false"
            name="email"
            type="email"
            // onChange={handleChange}
            // value={email}
            mb={5}
          />
          <label htmlFor="password">Description</label>
          <Input
            rounded="false"
            id="password"
            name="password"
            type="password"
            // onChange={handleChange}
            // value={password}
            mb={5}
          />
         

          <Button colorScheme="blue" w="100%" type="submit">
            Submit
          </Button>
          
         
         
          
        </form>
      </VStack>
    </SimpleGrid>
  </>

  
  )
}

export default Addpost