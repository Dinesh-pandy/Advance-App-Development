// AdminProfilePage.jsx
import { useState } from 'react';
import '../assets/css/UserMan.css';
import axios from 'axios';
import { useEffect } from 'react';

const Appman = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedCollege, setEditedCollege] = useState('');
  const [editedEngcourse, setEditedEngcourse] = useState('');
  const [editedArtscourse, setEditedArtscourse] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/forms/alll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/forms/deletee/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedCollege(user.college);
    setEditedEngcourse(user.engg);
    setEditedArtscourse(user.arts);
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setEditedName('');
    setEditedEmail('');
    setEditedCollege('');
    setEditedEngcourse('');
    setEditedArtscourse('');
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/forms/updatee/${editingUser.id}`, {
        name: editedName,
        email: editedEmail,
        college: editedCollege,
        engg: editedEngcourse,
        arts: editedArtscourse,
      });
      fetchUsers(); 
      cancelEdit();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  return (
    <div>
    <center><h2 className='adpan'>ADMINISTRATION PANEL</h2></center>

<div className="admin-dashboard">
    <div className="sidebar">
      <ul>
        <li><a href="/ad-db">Profile</a></li>
        <li><a href="/users">Users Management</a></li>
        <li><a href="/courseMan">Course Management</a></li>
        <li><a href="/appMan">Applicant Management</a></li>
        <li><a href="/">LogOut</a></li>
      </ul>
    </div>
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
        {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
      </div>
      <div className="admin-profile-content">
        <div className="user-table">
          <h2>Applicant</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Eng Course</th>
                  <th>Arts Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                    <td>{editingUser === user ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : user.name}</td>
                    <td>{editingUser === user ? <input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} /> : user.email}</td>
                    <td>{editingUser === user ? <input type="text" value={editedCollege} onChange={(e) => setEditedCollege(e.target.value)} /> : user.college}</td>
                    <td>{editingUser === user ? <input type="text" value={editedEngcourse} onChange={(e) => setEditedEngcourse(e.target.value)} /> : user.engg}</td>
                    <td>{editingUser === user ? <input type="text" value={editedArtscourse} onChange={(e) => setEditedArtscourse(e.target.value)} /> : user.arts}</td>
                    <td>
                      {editingUser === user ? (
                        <>
                          <button className="update-button" onClick={updateUser}>Update</button>
                          <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
                        </>
                      ) : (
                        <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                      )}
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Appman;
