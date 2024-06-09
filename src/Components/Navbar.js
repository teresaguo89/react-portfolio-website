import React, { useState, useEffect } from 'react';
import { Link, useLocation} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [activeLink, setActiveLink] = useState(null); // State to track the active link
    const location = useLocation();

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

      // Update the active link based on the current location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/about') {
      setActiveLink('about');
    } else if (path === '/contact') {
      setActiveLink('contact');
    }
  }, [location]);

  return (
    <div className = "navbar">
      <div className = "leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>
        <h1>
        T.G
        </h1>
        </Link>
        
        <div className = "hiddenLinks"> 
          <Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</Link>
          <Link to="/about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</Link>
          <Link to="/contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</Link>
        </div>
      </div>
      
      <div className = "rightSide">
      <Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</Link>
        <Link to="/about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</Link>
        <Link to="/contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
