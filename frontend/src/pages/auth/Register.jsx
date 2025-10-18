import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./auth.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [createpass, setCreatePass] = useState("");
  const [showPass, setShowPass] = useState("false");

  const inputfname = (e) => {
    setFname(e.target.value);
  };
  const inputemail = (e) => {
    setEmail(e.target.value);
  };
  const inputpassword = (e) => {
    setCreatePass(e.target.value);
  };
  const showPassword = () => {
    setShowPass(!showPass)
  }
  const HandleRegister = () => {
    console.log(fname)
    console.log(email)
    console.log(createpass)
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Register To Donate</h1>
        <input type="text" className="form-section" placeholder="Full Name" onChange={inputfname} />
        <input type="text" className="form-section" placeholder="Your E-mail" onChange={inputemail} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type={showPass ? "text" : "password"} className="form-section" placeholder="Create Password"
            onChange={inputpassword} />
          {showPass ? (
            <FaRegEyeSlash size={20} onClick={showPassword} />
          ) : (
            <FaRegEye size={20} onClick={showPassword} />
          )}
        </div>
        <input type={showPass ? "text" : "password"} className="form-section" placeholder="Confirm Password" />
        <div className="form-section">
        <Link to={"/RegisterProfile"} className='linkbtn'><button onClick={HandleRegister}>Done</button></Link>
        </div>
        <div className="reg-here">
          <span>Already Have an Account...</span><Link to={"/Login"}>LOG IN</Link>
        </div>

      </div>
    </div>
  )
}

export default Register
