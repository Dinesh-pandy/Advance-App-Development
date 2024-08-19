import { useNavigate } from 'react-router-dom';
import '../assets/css/adminsignup.css';
import Navbar from './navbar';

function AdminSignup() {  
    
    const navigate = useNavigate();
    const handleReg =() => {
      navigate("/adLog");
    }
    return (
        <div>
<nav>
    <Navbar/>
</nav>
  
    <div className="signup-main">
      <div className="signup-sub-main">
        <div className="signup-container">
          <div className="signup-content">
            <h1>Sign Up</h1>
            <form onSubmit={handleReg}>
              <div className="signup-input">
                <label>Username</label>
                <input
                  className="signup-username"
                  placeholder="Username"
                  required type="text"
                />
              </div>
              <div className="signup-input">
                <label>Email</label>
                <input
                  className="signup-email"
                  placeholder="Email"
                  required type="email"
                />
              </div>
              <div className="signup-input">
                <label>Password</label>
                <input
                  className="signup-password"
                  placeholder="Password"
                  required type="password"
                />
              </div>
              <div className="signup-button">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <p className="signup-link">
              Already have an account? <a href="/adLog">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminSignup;
