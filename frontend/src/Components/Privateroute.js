import React ,{useContext}from 'react'
import{Navigate} from 'react-router-dom'
import {Alert,AlertIcon} from '@chakra-ui/react'

import {AuthContext} from '../Context/AuthContext'
function Privateroute({children}) {
  const {authState}=useContext(AuthContext)
  

  if(!authState.isAuth){
    return( <>
    <Navigate to='/'></Navigate>

    <Alert status='warning'>
    <AlertIcon />
    Seems like you are not admin
  </Alert>
    </>
    ) 
   
  }
  
    return children
   
  
}

export default Privateroute