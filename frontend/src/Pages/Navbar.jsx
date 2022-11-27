import React from 'react'
import { Button, HStack, Spacer, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'


function Navbar() {
 const handleLogout=()=>{
console.log("HI")
 }
  return (
    <HStack w="100%" h="60px" border="2px solid gray" px={5}>
    <HStack>
      <Link to="/">
        <Button colorScheme="blue">HOME</Button>
      </Link>
    </HStack>
    <Spacer />
    <HStack w="20%" justify="space-evenly">
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
      {/* )} */}
    </HStack>
  </HStack>
  )
}

export default Navbar