import React from 'react'
import Navbar from './Navbar'
import "./Header.css"
import Logo from "../../Assets/Logo.png"
import { Link , useLocation} from 'react-router-dom'
import Regnavbar from './Regnavbar'

const Header = () => {

  const location = useLocation();

  const hideNavRoutes =['/RegisterProfile' , '/FullRegister' , '/Dashboard'];

  return (
    <div className='header'>
      <div><img src={Logo} /></div>

      {!hideNavRoutes.includes(location.pathname)? <Navbar/>: <Regnavbar/>}
      
      <div className='navtosearchpage'>
       <Link to={'/SearchPage'}><button>Find Donor</button></Link></div>
    </div>
  )
}

export default Header