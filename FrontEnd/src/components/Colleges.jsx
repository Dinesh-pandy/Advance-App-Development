import '../assets/css/col.css';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Nav from './navbar';
function Col() {
    return (
    <div>
        <nav>
       <Nav/>
      </nav>
      <div className='top'>
        <div className="pro-week">
        <h3 className="pow-title">COLLEGES</h3>
        <div>
          <p className="pow">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
          <center><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1709792847/AF1QipOE2gwQk_VIrZ6hzm4tMgyqnhVmrrHAHP_QkNix_s1360-w1360-h1020_ozyvop.jpg" alt="img" className="pow-img"></img></center>
          <center><p className="pow-des">Sri Krishna College of Engineering and Technology (SKCET), nestled in the vibrant city of Coimbatore, Tamil Nadu, stands as a beacon of academic excellence in the field of engineering education. Since its establishment in 1998, SKCET has remained committed to nurturing young minds and fostering innovation. With a sprawling campus equipped with modern amenities and world-class infrastructure, the college provides a conducive environment for holistic learning and development. SKCET offers a diverse range of undergraduate and postgraduate programs in engineering disciplines, tailored to meet the evolving needs of the industry and society.
          The college boasts of a distinguished faculty comprising experienced academicians and industry experts who mentor and guide students towards achieving academic excellence and realizing their career aspirations.SKCET ensures that students gain practical exposure and hands-on experience in their chosen fields.</p></center>
          <center><Link to={'/course'}><button className='btn-app'>Apply</button></Link></center>
        </div>
        </div>
        <br/>
        <div className="pro-week">
        <div>
          <p className="pow">SRI KRISHNA COLLEGE OF TECHNOLOGY</p>
          <center><img src="https://www.srikrishna.ac.in/images/Slider/Slide2.jpg" alt="img" className="pow-img"></img></center>
         
          <center><p className="pow-des">Sri Krishna College of Technology (SKCT) is a vibrant institute of higher education established in 1985 promoted by Sri Krishna Institutions. An extraordinary freedom of opportunity—to explore, to collaborate and to challenge oneself is the hallmark of the Institute. Being an autonomous institute, affiliated to Anna University, Chennai, and approved by AICTE, New Delhi, SKCT lays strong emphasis on collaborative research and stands apart from other institutes by its participatory work culture, student care programmes and high industry interaction. In a span of 38 years, it has emerged as one of the premier engineering colleges for learning, discovery and innovation due to the dynamic leadership of the Chairperson and Managing Trustee Smt S Malarvizhi. Being an acclaimed educationalist, she continues to contribute profusely for the glory and happiness of advancing generations</p></center>
          
          <center><Link to={'/course'}><button className='btn-app'>Apply</button></Link></center>
        </div>
        </div>
        <br/>
        <div className="pro-week">
        <div>
          <p className="pow">SRI KRISHNA ARTS AND SCIENCE COLLEGE</p>
          <center><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1708513377/1551426269phpFcvTRK_bmgou1.jpg" alt="img" className="pow-img"></img></center>
          <center><p className="pow-des">Sri Krishna Arts and Science College (SKASC) is an educational institution located in Coimbatore, Tamil Nadu, India. It offers undergraduate and postgraduate courses in various disciplines including arts, science, commerce, computer applications, and management studies. The college is known for its quality education, modern infrastructure, and emphasis on holistic development of students. It often organizes seminars, workshops, and conferences to enrich the academic experience of its students.</p></center>
          <center><Link to={'/artsCourse'}><button className='btn-app'>Apply</button></Link></center>
        </div>
        </div>
        </div>
    <footer>
      <Footer/>
    </footer>
    
    </div>
        )
    }
    export default Col