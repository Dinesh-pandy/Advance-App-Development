import '../assets/css/nav.css';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Nav from './navbar';
import Carde from './Card';
import Silder from './sliderCard';
import Information from './process-right';
import Content from './process-left';
import Info from './process-right2';
import Con from './process-left2';
import Advantages from './Advantages';
import Transform from './transform';

function Homes() {
  return (
    <div>
      <nav>
       <Nav/>
      </nav>

<div className='home'>


      <div className="container">
        <div className="content">
          <header>
            <h3 className='head'>WELCOME TO EDUADMIT_CONNECT</h3>
          </header>
          <div className="hero-content">
            <h2 className='top-hero'>APPLY FOR NEW ADMISSION</h2>
            <p className='para'>Start your journey towards a bright future!</p>
            <Link to={'/col'}><button className='btn-app'>GETS STARTED</button></Link>
            <Link to={'/course'}><button className='btn-app1'>VIEW COURSE</button></Link>
          </div>
        </div>
        <div className="image">
          <section className="hero">
            <div className="hero-image">
              <img src="https://img.freepik.com/free-vector/students-with-computer-classroom-elements-white-background_1308-52052.jpg?t=st=1709434159~exp=1709437759~hmac=a500336eb8c8ec15b1fd730fe07cd5ac6341c754339e6521cb4c33cd9a0250dd&w=826" className='logo-img' alt="Students studying" />
            </div>
          </section>
        </div>
      </div>
      <div>
        <Transform/>
      </div>
      <div>
        <h2 className='Content-head'>Enhance Student Experiences with an EduAdmit_Connect Student Admission Portal</h2><br/>
       <center> <p className='Content-Home'>In today’s fast-paced digital era, convenience and intuitiveness reign supreme. From hailing a cab to ordering food or making payments, seamless experiences are the expected norm. Isn’t it time we applied this same user-centric approach to the realm of student admissions? That’s precisely where the Meritto Student Admission Portal (formerly known as NoPaperForms) comes in, designed to personalize and streamline the enrolment journey for each student.<br/><br/>

Ditch the disarray of disconnected digital platforms that confuse students and burden your administration team. Meritto is here to transform that with its all-encompassing admission platform that serves an array of educational institutions — be it Higher Education, Online Degree Programs, Coaching Institutes, EdTech firms, K-12 schools, or Preschools. <br/><br/>Our portal serves as a one-stop hub for the entire enrolment process, delivering a personalized experience that bolsters students’ confidence to join your institution, simultaneously elevating your institution’s brand reputation. With Meritto, you’re not just modernizing admissions — you’re shaping the future of educational experiences.</p></center>
      </div>
      <div>
      <center><h1 className='ov'>INSTITUTIONS</h1></center>
        <Carde/>
      </div>
    <div>
        <Information/>
    <div>
      <Content/>
    </div>
    <div>
      <Info/>
      <div>
        <Con/>
        </div>
        <div>
          <Advantages/>
        </div>
      <div>
        <center><h1 className='ov'>OVERVIEW</h1></center>
        <Silder/>
      </div>

      </div>
      <footer>
        <Footer/>
      </footer>

        <div>
          <p className='reserve'>Copyright © 2024 EduAdmit_Connect and co. All Rights Reserved.</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Homes;