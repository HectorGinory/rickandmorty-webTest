import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Characters from '../Characters/Characters'

const Body = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/characters' element={<Characters />}/>
    </Routes>
  )
}

export default Body
