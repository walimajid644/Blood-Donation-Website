import React from 'react'
import { useParams } from 'react-router-dom';
import donors from '../../data';
import "./profile.css"
import profileimg from '../../Assets/profileimg.png'

const Profile = () => {

  const {id} = useParams();
  const donor = donors.find((d)=>d.id === parseInt(id));

  if (!donor) return <h2>Donor not found</h2>

  return (
    <div className='profile'>
      <div className='mainContainerProfile' >
<div className='leftProfile'>
  <img src={profileimg} /> 
  <h2>{donor.name}</h2>
  <div><p><strong>Blood Group : </strong>{donor.Bloodgroup}</p></div>
  <div><p><strong>City : </strong>{donor.city}</p></div>
  <div><p><strong>Age : </strong>{donor.age}</p></div>
  <div><p><strong>Phone : </strong>{donor.phone}</p></div>
  <div><p><strong>Email : </strong>{donor.email}</p></div>
</div>
<div className='rightProfile'>
<div className='donationHistory'>
  <h2>Donation History</h2>
  <div className='donationDate'>
  <p><strong>May 2025</strong></p>
  <p>500ml (1pint)</p>
  </div>
  <div className='donationDate'>
  <p><strong>January 2025</strong></p>
  <p>500ml (1pint)</p>
  </div>
  <div className='donationDate'>
  <p><strong>May 2024</strong></p>
  <p>250ml (1pint)</p>
  </div>
  <div className='donationDate'>
  <p><strong>January 2024</strong></p>
  <p>500ml (1pint)</p>
  </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Profile
