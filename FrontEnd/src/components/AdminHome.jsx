// import React from 'react';
import '../assets/css/adhome.css';
import Admindetails from './AdminProfile';

const AdminDashboard = () => {
  return (
    <div>
<div>
    <center><h2 className='adpan'>ADMINISTRATION PANEL</h2></center>
</div>
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li><a href="/ad-db">Profile</a></li>
          <li><a href="/users">Users Management</a></li>
          <li><a href="/courseMan">Course Management</a></li>
          <li><a href="/courseMan">Applicant Management</a></li>
          <li><a href="/">LogOut</a></li>
        </ul>
      </div>
      <div className="main-content">
        <Admindetails/>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
