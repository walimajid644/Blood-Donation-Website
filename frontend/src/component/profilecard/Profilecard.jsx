import React from 'react'
import { Link } from 'react-router-dom'
import "./profilecard.css"

const Profilecard = (props) => {

  return (
    <div className='profileCard'>
      <h2>{props.data?.name}</h2>
      <p>Blood Group: {props.data?.Bloodgroup}</p>
      <p>City: {props.data?.city}</p>
      <Link to={`/Profile/${props.data.id}`}><button className='cardButton'>More Details</button></Link>
      <button className='cardButton' onClick={() => { window.location.href = `tel:${props.data?.phone}`; }}>
             Contact Now</button>
    </div>
  )
}

export default Profilecard