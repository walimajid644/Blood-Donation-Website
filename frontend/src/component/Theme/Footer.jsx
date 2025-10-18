import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"
import Logo from "../../Assets/Logo.png"

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='section'> 
        <img src={Logo} />
        </div>
        <div className='section'>
          <h3>Quick Links</h3>
          <ul>
        <li><Link to={"/"} className='link' >Home</Link></li>
        <li><Link to={"/About"} className='link' >About</Link></li>
        <li><Link to={"/Contact"} className='link' >Contact</Link></li>
      </ul>
        </div>
        <div className='section'>
        <h3>Our Socials</h3>
        <ul>
        <li><a href="www.facebook.com">Facebook</a></li>
        <li><Link to={"/"} className='link' >Instagram</Link></li>
        <li><Link to={"/"} className='link' >Whatsapp</Link></li>
        <li><Link to={"/"} className='link' >X (Twitter)</Link></li>
      </ul>
        </div>
      </div>
      <div className='copyright'>
<p>All rights reserved to Online Blood Donation Website</p>
      </div>
    </div>
  )
}

export default Footer
