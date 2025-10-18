import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li><button>Dashboard</button></li>
          <li><button>View Reports</button></li>
          <li><button>Change Password</button></li>
          <li><button className="logout">Logout</button></li>
        </ul>
      </aside>

      <main className="admin-dashboard">
        <h2>Admin Dashboard</h2>

        <div className="dashform-section">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Blood Group" />
          <button>Add User</button>
        </div>

        <div className="user-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Blood Group</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Majid Wali</td>
                <td>Lahore</td>
                <td>O+</td>
                <td>
                  <button>Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Ali Khan</td>
                <td>Karachi</td>
                <td>A+</td>
                <td>
                  <button>Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
