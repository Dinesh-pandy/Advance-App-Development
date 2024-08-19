import '../assets/css/greet.css';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from './navbar';
import Footer from './footer';

const Greet = () => {
  return (
    <div>
        <Navbar/>
    <div className="thank-you-message">
      <FaCheckCircle className="tick-icon" />
      <h1>Thank You for Registering!</h1>
      <p>We are excited to have you in your college, Have a successful career ahead......!!</p>
    </div>
    <Footer/>
    </div>
  );
}

export default Greet;
