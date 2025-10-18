import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./auth.css"

const Forget = () => {
  return (
        <div className="login-container">
      <div className="login-form">
        <h1>RESET YOUR PASSWORD</h1>
          <input type="text" className="form-section" placeholder="Enter Your E-mail" />
          <input type="password" className="form-section" placeholder="Enter New Password" />
          <input type="password" className="form-section" placeholder="Confirm New Password" />
          <div className="forgot-pass">
             <Link to={'/Login'}>LOG IN NOW</Link>
        </div>
        <div className="form-section">
            <button >Done</button>
          </div>
      </div>
    </div>
  )
}

export default Forget
