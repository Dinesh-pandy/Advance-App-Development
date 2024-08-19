import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/logad.css';
import axios from 'axios';
import Navbar from './navbar';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/authSlice";

function LoginUi() {  
  const [credentials, setCredentials] = useState({
    email: '',
    pswd: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/students/authenticate', credentials)
      .then((res) => {
        console.log('Login successful');
        const details = res.data;
        console.log('Token and Role: ', details);
        const token = details;
        const tokenExpiration = new Date();
        tokenExpiration.setHours(tokenExpiration.getHours() + 1);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('tokenExpiration', tokenExpiration.toString());
        // sessionStorage.setItem('role', details.role);
      })
      .then(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('tokenExpiration');
        // const role = sessionStorage.getItem('role');

        if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
          const decodedToken = jwtDecode(token);
        // const role = decodedToken.role;
        // console.log(role);
        const {exp,iat,role,sub} = decodedToken;
        dispatch(loginSuccess({exp,iat,role,sub})); 
        console.log("Stored Redux:",{role,exp,iat,sub});
          
          if (role === 'ADMIN') {
            navigate('/ad-db');
          } 
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
    }
  return (   
    <div>
<nav>
  <Navbar/>
</nav>

    <div className="login-main">
      <div className="login-sub-main">
        <div className="login-container">
          <div className="login-imgs">
            <div className="login-container-image">
              <img
                alt="profile"
                className="login-profile"
                src="https://res.cloudinary.com/drnokmrib/image/upload/v1708782639/adm-log_rx4x7x.jpg"
              />
            </div>
          </div>
          <div className="login-content">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div className="login-input">
                <label>Email</label>
                <input
                  className="login-username"
                  placeholder="Username"
                  required // Added required attribute
                  type="text"
                  name='email'
                  onChange={handleChange}
                />
              </div>
              <div className="login-input">
                <label>Password</label>
                <input
                  className="login-password"
                  placeholder="Password"
                  required // Added required attribute
                  type="password"
                  name='pswd'
                  onChange={handleChange}
                />
              </div>
              <div className="login-button">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default LoginUi;
