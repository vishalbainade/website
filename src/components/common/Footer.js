import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';
import logo from '../../assets/images/Symbytes-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you soon!');
  };
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0066cc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-content container">
        <div className="footer-section about">
          <div className="footer-logo">
            <img src={logo} alt="Symbytes Technologies Logo" />
            <h2>Symbytes Technologies</h2>
          </div>
          <p>Blueprinting the Future, Byte by Byte.</p>
          <div className="contact">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1 234 567 8900</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@Symbytes.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Tech Park, Silicon Valley, CA</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://facebook.com/Symbytes" aria-label="Facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/Symbytes" aria-label="Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/Symbytes" aria-label="LinkedIn" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/Symbytes" aria-label="Instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <div className="footer-divider"></div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section services-links">
          <h3>Our Services</h3>
          <div className="footer-divider"></div>
          <ul>
            <li><Link to="/services/web-development">Web Development</Link></li>
            <li><Link to="/services/mobile-development">Mobile Development</Link></li>
            <li><Link to="/services/cloud-services">Cloud Services</Link></li>
            <li><Link to="/services/it-consulting">IT Consulting</Link></li>
            <li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact-form">
          <h3>Contact Us</h3>
          <div className="footer-divider"></div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" name="email" className="text-input" placeholder="Your email address..." required />
            </div>
            <div className="form-group">
              <textarea name="message" className="text-input" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Symbytes Technologies | All rights reserved</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;