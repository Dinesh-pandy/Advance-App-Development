import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css";
import Nav from "./navbar";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/authSlice";


import { useState } from "react";
import axios from "axios";

function Login() {
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
          
          if (role === 'USER') {
            navigate('/');
          } else if (role === 'ADMIN') {
            navigate('/ad-db');
          }
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };
  return (
    <div>
   <nav>
       <Nav/>
      </nav>
    <div className="auth-form-container1">
      <form className="login-form" onSubmit={handleSubmit}>
      <center><div className="l1">Login</div></center>
        <label required className="em" htmlFor="email">Email</label>
        <br />
        <input className="i1" required type="email" placeholder="Enter your gmail" id="email" name="email" value={credentials.email} onChange={handleChange} />
        <br />
        <label className="pa" htmlFor="password">Password</label>
        <br />
        <input className="i1" required type="password" placeholder="Enter your password" id="password" name="pswd" value={credentials.pswd} onChange={handleChange} /><br />
        <button className="button1" type="submit" >Log In</button><br/>
        <Link to={"/register"}><button className="link-btn1">Donot have an account? Register here.</button></Link>
      </form>
    </div>
    </div>
  )
}

export default Login;