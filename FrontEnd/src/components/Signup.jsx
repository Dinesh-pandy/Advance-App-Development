import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/Signin.css";
import Navbar from "./navbar";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const Role = "USER";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+}{"':;?/>.<,])(?=.*[^\da-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/students/addUser", {
        email: email,
        pswd: password,
        fullName: name,
        mobile: phoneNumber,
        role:Role
      });
      console.log("Registration successful:", response.data);
      // Redirect or show a success message here
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error
    }
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="login">
        <center>
          <div className="h21">Register</div>
        </center>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container1">
            <label className="lab" htmlFor="name">
              Username
            </label>
            <input
              required
              type="text"
              className="lab1"
              id="name"
              name="name"
              placeholder="Enter Your Fullname"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="email">
              E-mail
            </label>
            <input
              className="lab1"
              required
              type="email"
              placeholder="Enter your Email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="password">
              Password
            </label>
            <input
              className="lab1"
              required
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="phonenumber">
              Mobile Number
            </label>
            <input
              className="lab1"
              required
              type="phonenumber"
              placeholder="Enter your Moblie Number"
              id="number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="button-container">
            <button className="button2" type="submit">
              Proceed
            </button>
          </div>
        </form>
        <div className="register">
          <Link to={"/login"}>
            <button className="link-btn1">
              Already have an account? Login here.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
