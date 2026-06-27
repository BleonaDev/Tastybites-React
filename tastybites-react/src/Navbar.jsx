import React, { useState } from 'react';
import nightModeIcon from './assets/night-mode.png';
import brightness from './assets/brightness.png';
import { Link } from 'react-router-dom';


function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [isDark,setIsDark]=useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  function nightMode(){
   setIsDark(!isDark);
   document.body.classList.toggle('dark-mode');
  }

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
             <Link className="nav-link" to="/">Home</Link>
          </li>
          
          <li>
            <Link className="nav-link" to="/recipes">Our recipes</Link>
          </li>
          <li>
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button id="toggle-theme"  onClick={nightMode}>
            <img src={isDark? brightness : nightModeIcon} height="30" width="30" alt="theme" />
          </button>
          <a className="contactLi" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

