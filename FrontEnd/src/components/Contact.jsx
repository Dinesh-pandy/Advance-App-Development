import { useState } from 'react';
import '../assets/css/feedback.css';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };


  const handleContact = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/contact/addcontact", {
        name: name,
        email: email,
        query: query
      
      });
      console.log("Contacted successfully:", response.data);
      // Redirect or show a success message here
      
    } catch (error) {
      console.error("Contacted failed:", error);

    }
  };

    return (
      <div>
        <Navbar/>
        <div className="down">
            <div className="feedy">
                <center><h2>Contact Us</h2></center>
                <form className='fd' onSubmit={handleContact} >
                    <label className="lab" htmlFor="name">Email</label>
                    <input type="email" value={email} placeholder="Enter your Email"  onChange={handleEmailChange} required />
                    <label className="lab" htmlFor="name">Username</label>
                    <input type="name" value={name} placeholder="Enter your Name" onChange={handleNameChange} required />
                    <label className="lab" htmlFor="name">Query</label>
                    <textarea type="name" value={query} placeholder="Enter Message" onChange={handleQueryChange} required />
                    <center><button type='submit' className="btg-fd">Submit</button></center>
                </form>
            </div>
        </div>
        <Footer/>
      </div>

    );
};

export default Contact;