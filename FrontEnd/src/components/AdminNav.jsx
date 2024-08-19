// import { Link } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../assets/css/adnav.css';
import { CgProfile } from "react-icons/cg";

const AdNavbar = () => {
  return (
    <nav className="ad-navbar">
      <ul className="nav-list">
        {/* <li className="nav-item-1"><Link to="/">Home</Link></li> */}
        {/* <li className="nav-item-2"><Link to="/col">Colleges</Link></li> */}
        <li className="nav-item-3"><Link to="/ad-db">BACK TO DASHBOARD</Link></li>
        <li className="nav-item-4 dropdown">
              <CgProfile className="icon2" size={22}/>
          <ul className="dropdown-menu-1">
            {/* <li><a href="#" className='ad-nav-items'>Login</a></li> */}
            <li><a href="/adprof" className='ad-nav-items'>Profile</a></li>
            <li><a href="/" className='ad-nav-items'>Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default AdNavbar;
