import React, { useState } from 'react';
import '../styles/pages/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just set formSubmitted to true
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">We're here to answer your questions and help solve your technology challenges</p>
          <div className="hero-cards">
            <div className="hero-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="hero-card">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>info@Symbytes.com</p>
            </div>
            <div className="hero-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit Us</h3>
              <p>123 Tech Park, Silicon Valley</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-info-card">
                <h2>How Can We Help?</h2>
                <p className="contact-intro">
                  Whether you're looking for a technology partner, have questions about our services, 
                  or want to explore career opportunities, we're eager to hear from you.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3>Our Office</h3>
                      <p>123 Tech Park, Silicon Valley<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3>Phone</h3>
                      <p>+1 (555) 123-4567</p>
                      <p className="text-muted">Monday-Friday, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="icon-circle">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3>Email</h3>
                      <p>info@Symbytes.com</p>
                      <p>support@Symbytes.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-connect">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="https://facebook.com/Symbytes" aria-label="Facebook" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/Symbytes" aria-label="Twitter" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/company/Symbytes" aria-label="LinkedIn" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com/Symbytes" aria-label="Instagram" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="form-card">
                <h2>Send Us a Message</h2>
                {formSubmitted ? (
                  <div className="form-success">
                    <div className="success-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="form-control"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject <span className="required">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message <span className="required">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your inquiry in detail..."
                        className="form-control"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">
                      <i className="fas fa-paper-plane"></i> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt map-icon"></i>
              <p>123 Tech Park, Silicon Valley, San Francisco, CA 94105</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and processes</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>What services does Symbytes Technologies offer?</h3>
              </div>
              <div className="faq-answer">
                <p>
                  We offer a comprehensive range of IT services including web development, mobile app development, 
                  cloud solutions, IT consulting, DevOps services, and AI & machine learning solutions tailored to 
                  meet your business needs.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>How can I request a quote for my project?</h3>
              </div>
              <div className="faq-answer">
                <p>
                  You can request a quote by filling out our contact form with details about your project, 
                  or by calling us directly at +1 (555) 123-4567. Our team will get back to you within 24 hours 
                  to discuss your requirements.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>What is your typical project timeline?</h3>
              </div>
              <div className="faq-answer">
                <p>
                  Project timelines vary depending on the scope and complexity of the project. 
                  We provide detailed timelines during the initial consultation phase after understanding 
                  your specific requirements and project goals.
                </p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>Do you offer support after project completion?</h3>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, we offer comprehensive ongoing support and maintenance services to ensure your solution 
                  continues to perform optimally after launch. We provide various support packages tailored to 
                  your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;