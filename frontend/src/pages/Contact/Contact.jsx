import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contactSection'>
    <div className='container'>
      <div className='contactInfo'>
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Whether you have questions about donating blood, need assistance finding a blood drive, or have any other inquiries, please don't hesitate to reach out. Our dedicated team is here to help.
        </p>
        <ul className='contactDetails'>
          <li>
            <span>Phone: <a href="tel:[Your Phone Number]">+92300000000</a></span>
          </li>
          <li>
            <span>Email: <a href="mailto:[Your Email Address]">blooddonation@gmail.com</a></span>
          </li>
        </ul>
      </div>
      <div className='contactForm'>
        <h2>Send Us a Message</h2>
        <form>
          <div className='formGroup'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className='formGroup'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className='formGroup'>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className='formGroup'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className='contactsubmitButton'>Send Message</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
