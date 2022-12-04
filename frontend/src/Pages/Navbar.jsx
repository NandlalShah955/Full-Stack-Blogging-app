import React from 'react'
import { Button, HStack, Spacer } from "@chakra-ui/react";
import {Link} from 'react-router-dom'


function Navbar() {
 const handleLogout=()=>{
console.log("HI")
 }
  return (
    <HStack w="100%" h="60px" border="2px solid gray" px={5} bg="yellow">
    <HStack>
      <Link to="/">
        <Button colorScheme="blue">HOME</Button>
      </Link>
    </HStack>
    <Spacer />
    <HStack w="50%" justify="space-around" gap={1}>
      <Link to="/signup">
        <Button colorScheme="blue">SignUp</Button>
      </Link>
      {/* {!token && ( */}
        <Link to="/login">
          <Button colorScheme="blue">Login</Button>
        </Link>
      {/* )} */}
      {/* {token && ( */}
        <Button colorScheme="blue" onClick={handleLogout}>
          LogOut
        </Button>

        <Button colorScheme='blue' w='120px'>
          <Link to='/writerpage'>WriterPage</Link>
        </Button>
        <Button colorScheme='blue' w='120px'>
          <Link to='/admin'>AdminPanel</Link>
        </Button>
      {/* )} */}
    </HStack>
  </HStack>
  )
}

export default Navbar