import React from 'react'
import {
  Button,
  Container,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
function Login() {
  return (
    <Stack>
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
      <VStack justify="center">
        <Img src="https://th.bing.com/th/id/OIP.g_U9qq46tlzGLfUXCepJQAHaEM?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" mt={-40}/>
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
            // onChange={formik.handleChange}
            // value={formik.values.email}
            mb={5}
          />
          <label htmlFor="password">Password</label>
          <Input
            rounded="false"
            id="password"
            name="password"
            type="password"
            // onChange={formik.handleChange}
            // value={formik.values.password}
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