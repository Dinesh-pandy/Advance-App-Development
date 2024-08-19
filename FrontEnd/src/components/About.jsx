
import '../assets/css/about.css';
import Footer from './footer';
import Navbar from './navbar';

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our online student admission portal! We are dedicated to helping students navigate the admissions process smoothly.</p>
      <p>Our platform offers a user-friendly interface, comprehensive information about various programs, and assistance throughout the application process.</p>
      <p>Feel free to explore and reach out to us if you have any questions or need support.</p>
    </div>
    <div>
    <img src='https://res.cloudinary.com/drnokmrib/image/upload/v1709792563/pexels-helena-lopes-933964_ma3uvj.jpg' className='about-img'></img>
    </div>
    <div className="contact-info">
        <div className="card">
           <i className="ri-mail-send-fill"></i>
          <img src='https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-256.png' className='icons'></img>
          <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=VpCqJSBBDrphsdFTzdqNdNpplqFFsdWqdPXfXjpGqvBqqsWjWsNNdCWlkQbCblZkVbwHfbB'  className='ahref'><p>eduAdmit@gmail.com</p></a>
        </div>
        <div className="card">
          <i className="ri-phone-fill" ></i>
        <img src='https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-3/256/phone-call-256.png' className='icons'></img>
           <p className='ahref'>+91 9025317201</p>
         </div>
         <div className="card">
           <i className="ri-map-pin-fill"></i>
           <img src='https://cdn1.iconfinder.com/data/icons/freeline/32/gps_location_map_marker-256.png' className='icons'></img>

           <a href='https://www.google.com/maps/search/sri+krishna+college+of+engineering+and+technology/@10.9358406,76.9523712,15z/data=!3m1!4b1?entry=ttu' className='ahref'><p>SKCET, Coimbatore</p></a>
         </div>
       </div>
    <Footer/>
    </div>
  );
}

export default AboutUs;
