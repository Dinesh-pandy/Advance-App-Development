import { Link } from 'react-router-dom';
import '../assets/css/Label.css';
import Navbar from './navbar';

const Labels = () => {
  return (
    <div>
      <Navbar/>
    <div className="profile-container">
      <div className="profile">
        <Link to="/adlog" className="profile-link">
          <img src="https://res.cloudinary.com/drnokmrib/image/upload/v1708782639/adm-log_rx4x7x.jpg" alt="Admin Profile" className="profile-image" />
        </Link>
        <h2 className="profile-label">Admin</h2>
      </div>
      <div className="profile">
        <Link to="/login" className="profile-link">
          <img src="https://res.cloudinary.com/drnokmrib/image/upload/v1708782469/stu-log_u8potw.png" alt="Student Profile" className="profile-image" />
        </Link>
        <h2 className="profile-label">Student</h2>
      </div>
    </div>
    </div>
  );
};

export default Labels;
