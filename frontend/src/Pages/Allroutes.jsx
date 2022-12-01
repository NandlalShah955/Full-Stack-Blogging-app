import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage'
import AdminPanel from './AdminPanel'
function Allroutes() {
  return (
    <Routes>
    <Route path='/admin' element={<AdminPanel/>}></Route>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Allroutes