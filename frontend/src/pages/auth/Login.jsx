import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./auth.css"

const Login = () => {
  const [data , setdata] = useState({
    fname:"",
    password:"",
  })
  const handleinput= (e) =>{
const name =e.target.name;
const value =e.target.value 
setdata({...data , [name] : value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(data)
  }
  return (
        <div className="login-container">
      <div className="login-form">
        <h1>LOG IN</h1>
          <input type="text" className="form-section" name='fname'
           onChange={handleinput} placeholder="Enter Your E-mail" />
          
          <input type="password" className="form-section" name='password' 
          onChange={handleinput} placeholder="Enter Your Password" />
        
        <div className="forgot-pass">
             <Link to={'/Forget'}>Forgot Password</Link>
        </div>
        <div className="form-section">
            <button onClick={handlesubmit} >Let's Go</button>
          </div>
          <div className="reg-here">
            <span> New Here.....</span><Link to={"/Register"}>Register Now</Link>
       </div>
      </div>
    </div>
  )
}

export default Login
