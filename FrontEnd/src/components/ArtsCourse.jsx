import { Link } from 'react-router-dom';
import '../assets/css/course.css';

import Navbar from './navbar';
import Footer from './footer';

const Courses1 = () => {
  return (
    <div>
      <Navbar/>
      
      <center><h2 className='pg1'>Under-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.A English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Mathematics</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Electronics & Communication Systems</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Costume Design and Fashion</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Psychology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.Sc Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.Sc Data Science</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Com. Commerce with Computer Application</Link>
          </div>
        </div>
      </div>


      <center><h2 className='pg1'>Post-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
         <Link to={'/form'} className='link'> M.A. English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.A Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.A Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Biotechnology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Computer Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Com. International Business</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.Com. Commerce</Link>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
      );
    }
    
    export default Courses1;
