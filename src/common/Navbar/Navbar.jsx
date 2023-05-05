import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Rick_and_Morty_Logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar-container flex-c-sb'>
      <img src={logo}></img>
      <div className='btn-container flex-c-sb'>
        <div className='btn-navbar click' onClick={()=>navigate("/")}>Home</div>
        <div className='btn-navbar click' onClick={()=>navigate("/login")}>Login</div>
        <div className='btn-navbar click' onClick={()=>navigate("/register")}>Register</div>
        <div className='btn-navbar click' onClick={()=>navigate("/characters")}>Characters</div>
      </div>
    </div>
  )
}

export default Navbar
