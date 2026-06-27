import React, { useState } from 'react';
import facebookImage from './assets/facebook (2).png';
import instagramImage from './assets/instagram.png';
import twitterImage from './assets/twitter.png';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setSubmitted(true);
  };

  return (
    <>
      <div className="flex-container">
        <div className="contact">
          <h2 style={{ textAlign: 'center' }}>Contact us for more recipes</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><i className="fa fa-phone"> +355685491587</i></li>
            <li><i className="fa fa-phone"> +355694321980</i></li>
            <li id="email">
              <i className="fa fa-envelope" aria-hidden="true"> tastybites@gmail.com</i>
            </li>
          </ul>
        </div>
        
        <div className="socials" style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Follow us on Social Media</h2>
          <a href="#"><img src={facebookImage} alt="Facebook" /></a>
          <a href="#"><img src={instagramImage} alt="Instagram" /></a>
          <a href="#"><img src={twitterImage} alt="Twitter" /></a>
        </div>
      </div>

      <div className="contact_container">
        <h1 style={{ textAlign: 'center'}}>Send us a message!</h1>

        {submitted ? (
          <div style={{ textAlign: 'center', color: 'green', padding: '20px' }}>
            <h3>Thank you for your message! We will get back to you soon.</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
            <input type="text" placeholder=" First Name*" value={firstName} 
             onChange={(e) => setFirstName(e.target.value)}  required/><br /><br />
            <input type="text" placeholder="  Last Name*" value={lastName} 
              onChange={(e) => setLastName(e.target.value)} required/><br /><br />
            <input type="email" placeholder="  Email address*" value={email} 
              onChange={(e) => setEmail(e.target.value)} required /><br /><br />  
            <input  type="text" placeholder="  Phone Number*" value={phone} 
              onChange={(e) => setPhone(e.target.value)} /><br /><br />    
            <textarea rows="4" placeholder=" Write your message..." value={message} 
              onChange={(e) => setMessage(e.target.value)} required></textarea><br /><br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Contact;