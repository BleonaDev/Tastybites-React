import React, {useState} from 'react';
import facebook from './assets/facebook (2).png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';

function Footer(){


    return (<>
<hr></hr>
<footer className="footer">
  <div className="footer-container">
    <div className="footer-section about">
      <h2>🍴 Tasty Bites</h2>
      <p>Delicious recipes made simple.  
      Explore, cook, and enjoy tasty moments with us.</p>
    </div>
    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="recipes.html">Recipes</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section newsletter">
      <h3>Stay Updated</h3>
      <form>
        <input type="email" placeholder="Enter your email" required></input>
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="footer-section social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="#"><img src={facebook} alt="Facebook"></img></a>
        <a href="#"><img src={instagram} alt="Instagram"></img></a>
        <a href="#"><img src={twitter} alt="Twitter"></img></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2026 Tasty Bites. All rights reserved.</p>
  </div>
</footer>
   </> );
}
export default Footer