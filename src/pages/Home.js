import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
// Import the logo image
import logo from '../assets/images/Symbytes-logo.png';

const Home = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.feature, .service-card, .testimonial');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.style.animationPlayState = 'running';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (




    <div className="home-page">
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="logo-container">
          <img src={logo} alt="Symbytes Technologies Logo" className="hero-logo" />
        </div>
        <h1>Welcome to Symbytes Technologies</h1>
        <p>Blueprinting the Future, Byte by Byte</p>
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">Our Services</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>

    {/*/*

    /* <div className="home-page">
    //   <section className="hero">
    //     <div className="hero-content">
    //       <div className="logo-container">
    //         <img src={logo} alt="Symbytes Technologies Logo" className="hero-logo" />
    //       </div>
    //       <h1>Welcome to Symbytes Technologies</h1>
    //       <p>Blueprinting the Future, Byte by Byte</p>
    //       <div className="hero-buttons">
    //         <Link to="/services" className="btn btn-primary">Our Services</Link>
    //         <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
    //       </div>
    //     </div>
    //   </section>

    */}

      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Symbytes Technologies is a leading IT company providing innovative solutions to businesses worldwide. 
            With our team of experienced professionals, we deliver high-quality services tailored to meet your specific needs.
          </p>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-code"></i>
              <h3>Custom Software Development</h3>
              <p>Tailored solutions to meet your unique business requirements.</p>
            </div>
            <div className="feature">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile App Development</h3>
              <p>Engaging and functional mobile applications for iOS and Android.</p>
            </div>
            <div className="feature">
              <i className="fas fa-cloud"></i>
              <h3>Cloud Solutions</h3>
              <p>Scalable and secure cloud infrastructure for your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Custom websites and web applications that drive business growth.</p>
              <Link to="/services" className="read-more">Learn More</Link>
            </div>
            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications for all devices.</p>
              <Link to="/services" className="read-more">Learn More</Link>
            </div>
            <div className="service-card">
              <h3>IT Consulting</h3>
              <p>Expert advice to optimize your IT infrastructure and processes.</p>
              <Link to="/services" className="read-more">Learn More</Link>
            </div>
            <div className="service-card">
              <h3>Cloud Services</h3>
              <p>Secure and scalable cloud solutions for your business needs.</p>
              <Link to="/services" className="read-more">Learn More</Link>
            </div>
          </div>
          <div className="view-all">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>"Symbytes Technologies delivered an exceptional solution that transformed our business processes. Their team was professional and responsive throughout the project."</p>
              <div className="client-info">
                <h4>John Smith</h4>
                <p>CEO, Tech Innovations</p>
              </div>
            </div>
            <div className="testimonial">
              <p>"Working with Symbytes was a game-changer for our company. Their expertise in cloud solutions helped us scale our operations efficiently."</p>
              <div className="client-info">
                <h4>Sarah Johnson</h4>
                <p>CTO, Global Systems</p>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/clients" className="btn btn-secondary">View All Testimonials</Link>
          </div>
        </div>
      </section>
      
      {/* Connect section to visually link home page with footer */}
      <div className="footer-connect-section">
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0a1f44" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="connect-content">
            <h3>Ready to transform your business?</h3>
            <p>Let's start a conversation about your technology needs.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;