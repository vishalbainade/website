import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../../styles/components/Header.css';
// Use the correct relative path
import logo from '../../assets/images/Symbytes-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add padding to body to prevent content from being hidden under fixed header
    document.body.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';
    
    // Update padding if window is resized
    const handleResize = () => {
      document.body.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            {/* Add error handling for the image */}
            <img 
              src={logo} 
              alt="Symbytes Technologies Logo" 
              className="header-logo" 
              onError={(e) => {
                console.error("Logo failed to load");
                e.target.style.display = 'none';
              }}
            />
            <div className="logo-text">
              <h1>Symbytes Technologies</h1>
              <p>Blueprinting the Future, Byte by Byte</p>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;