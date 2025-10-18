import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li><Link to={"/"} className='link'>Home</Link></li>
        <li><Link to={"/About"} className='link'>About</Link></li>
        <li><Link to={"/Contact"} className='link'>Contact</Link></li>
        <li><Link to={"/Login"} className='link'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
