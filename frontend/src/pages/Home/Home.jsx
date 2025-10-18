import React from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"
import Image from "../../Assets/Image2.png"
import number1 from "../../Assets/number1.png"
import number2 from "../../Assets/number2.png"
import number3 from "../../Assets/number3.png"
import number4 from "../../Assets/number4.png"
import faq from "../../Assets/faq.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='main'>
        <div className='leftSide'>
          <h1>Donate Blood,</h1>
          <h2>save life!</h2>
          <Link to='/Register'>
          <button>Donate Now</button>
          </Link>
        </div>
        <div className='rightSide' >
          <div><img src={Image} /></div>
        </div>
      </div >
      <div className='tagline'>
        <div><h3>The Gift You Can Give, Again and Again.</h3></div>
        <div><Link to='/About'>
          <button>About us</button>
          </Link></div>
      </div>
      <div className='mainContainerSteps'>
        <div className='containerHeading'>
          <h2>Donation process</h2>
          <p>Following are the simple to understand steps for anyone.</p>
        </div>
        <div className='subContainerSteps' >
          <div className='steps'>
            <img src={number1} />
            <h3>Registration</h3>
            <p>This is where you sign in and provide your basic information. Think of it as getting your name on the list!</p>
          </div>
          <div className='steps'>
            <img src={number2} />
            <h3>Screening</h3>
            <p>Healthcare professionals will ask some health questions and checks your blood pressure and iron levels to make sure it's safe for you and the person receiving your blood.</p>
          </div>
          <div className='steps'>
            <img src={number3} />
            <h3>Donation</h3>
            <p>This is the actual process of giving blood. A qualified person will ensure smooth and safe process for you and the reciever.</p>
          </div>
          <div className='steps'>
            <img src={number4} />
            <h3>Refreshment</h3>
            <p>After you've donated the blood, you'll get some snacks and drinks. This helps you recover and feel better before you leave.</p>
          </div>
        </div>
      </div>
      <div className='faq'>
          <h2>Frequently Asked Questions</h2>
          <div className='containerfaq' >
        <div className='leftfaq'>
        <img src={faq} />
        </div>
        <div className='rightfaq'>
<h3>Q# Who can donate blood?</h3>
<p>Healthy adults aged 18–65 who meet weight and health requirements.</p>
<h3>Q# How long does the donation process take?</h3>
<p>Around 30–45 minutes in total.</p>
<h3>Q# How much blood is taken during a donation?</h3>
<p>About 450–500 ml (1 pint).</p>
<h3>Q# Can I donate blood if I smoke or drink alcohol?</h3>
<p>Yes, but avoid alcohol 24 hours before and after donation. Smoking is not a restriction but avoid smoking for at least 2 hours after donating.</p>
<h3>Q# Can I donate if I’m on medication?</h3>
<p>It depends—check with the staff at the donation center.</p>
<h3>Q# What should I do before donating blood?</h3>
<p>Eat a healthy meal and drink plenty of water.</p>
<h3>Q# What should I do after donating blood?</h3>
<p>Rest, hydrate, and avoid heavy activity for the day.</p>
<h3>Q# Are there any side effects?</h3>
<p>Minor dizziness or fatigue may occur, but it's temporary.</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Home
