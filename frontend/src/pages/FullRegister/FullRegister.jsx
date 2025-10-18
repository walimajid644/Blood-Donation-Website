import React from 'react'
import "./FullRegister.css"

const FullRegister = () => {
  return (
    <div className='fullRegisterSection'>
      <div className='editRegisterForm'>
        <h2>Edit Your Details</h2> <br />
        <form>
          <div className='formGroup'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className='formGroup'>
            <label htmlFor="email">Blood Group</label>
            <input type="text" id="bloodgroup" name="bloodgroup" placeholder="Your Blood Type" />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">City</label>
            <input type="text" id="city" name="city" placeholder="Your City" />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">Age</label>
            <input type="text" id="number" name="number" placeholder="Your Age" />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">Phone</label>
            <input type="text" id="phonenumber" name="phonenumber" placeholder="Your Phone Number" />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">Email</label>
            <input type="Email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">Address</label>
            <input type="text" id="address" name="address" placeholder="Your Address" />
          </div>
          <button type="submit" className='submitButton'>Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default FullRegister
