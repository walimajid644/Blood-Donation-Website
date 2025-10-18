import React from 'react'
import {Link} from 'react-router-dom'
// import { useParams } from 'react-router-dom';
// import donors from '../../data';
import profileimg from '../../Assets/profileimg.png'
import "./RegisterProfile.css"

const RegisterProfile = (props) => {

  // const {id} = useParams();
  // const donor = donors.find((d)=>d.id === parseInt(id));

  return (
    <div className='registerProfile'>
      <div className='mainregcontainer' >
        <div className='leftregprofile'>
          <div className='upperregcon'>
            <img src={profileimg} />
            <h2>John Doe</h2>
            <div><Link to='/FullRegister'><button>Edit Profile</button></Link></div>
          </div>
          <div className='lowerregcon'>
            <p><strong>Name : </strong>{props.data?.name}John Doe</p> <br />
            <div><p><strong>Blood Group : </strong>0-</p></div> <br />
            <div><p><strong>City : </strong>lahore</p></div> <br />
            <div><p><strong>Age : </strong>21</p></div> <br />
            <div><p><strong>Phone : </strong>03333333333</p></div> <br />
            <div><p><strong>Email : </strong>abc2mail.com</p></div> <br />
            <div><p><strong>Address : </strong>lahore lahore</p></div> <br />
          </div>
        </div>
        <div className='rightregprofile'>
          <h3>Donation History</h3>
          <div className='update'><input type="date" /> <button>Update</button></div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Blood Units</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13 Dec 2020</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>28 Nov 2020</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>04 Nov 2020</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>25 feb 2020</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>15 Oct 2020</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>15 nov 2019</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>15 jan 2010</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterProfile
