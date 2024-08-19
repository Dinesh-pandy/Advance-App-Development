import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/css/nav.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/col">Colleges</Link></li>
        <li className="nav-item"><Link to="/course">Explore</Link></li>
        <li className="nav-item dropdown">
              <CgProfile className="icon2" size={22}/>
          <ul className="dropdown-menu">
            <li><a href="/choice">Login</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;