import React, { useState, useEffect } from 'react';
import '../styles/pages/Clients.css';

const Clients = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'TechCorp International',
      industry: 'Technology',
      logo: '/images/clients/tech-corp-logo.png',
      description: 'A leading technology company specializing in enterprise software solutions.',
      testimonial: {
        text: 'Symbytes Technologies has been an invaluable partner in our digital transformation journey. Their expertise in cloud solutions has helped us modernize our infrastructure and improve our operational efficiency.',
        author: 'Michael Johnson',
        position: 'CTO'
      },
      caseStudy: {
        title: 'Cloud Migration and Infrastructure Modernization',
        challenge: 'TechCorp needed to migrate their legacy systems to the cloud to improve scalability and reduce operational costs.',
        solution: 'Symbytes designed and implemented a comprehensive cloud migration strategy, leveraging AWS services to create a scalable and secure infrastructure.',
        results: [
          '40% reduction in infrastructure costs',
          'Improved system reliability with 99.9% uptime',
          'Enhanced scalability to handle peak loads',
          'Reduced deployment time from days to hours'
        ]
      }
    },
    {
      id: 2,
      name: 'Global Finance Group',
      industry: 'Financial Services',
      logo: '/images/clients/global-finance-logo.png',
      description: 'A multinational financial services company providing banking and investment solutions.',
      testimonial: {
        text: 'The custom software solution developed by Symbytes has transformed our customer onboarding process, reducing processing time by 60% and significantly improving customer satisfaction.',
        author: 'Sarah Williams',
        position: 'Head of Digital Innovation'
      },
      caseStudy: {
        title: 'Digital Customer Onboarding Platform',
        challenge: 'Global Finance needed to streamline their customer onboarding process, which was manual and time-consuming.',
        solution: 'Symbytes developed a secure digital onboarding platform with automated verification processes and integration with existing systems.',
        results: [
          '60% reduction in onboarding time',
          '35% increase in customer satisfaction scores',
          'Reduced operational costs by eliminating manual processes',
          'Enhanced compliance with regulatory requirements'
        ]
      }
    },
    {
      id: 3,
      name: 'HealthPlus Systems',
      industry: 'Healthcare',
      logo: '/images/clients/health-plus-logo.png',
      description: 'A healthcare technology company providing solutions for hospitals and clinics.',
      testimonial: {
        text: 'Symbytes Technologies delivered a robust telemedicine platform that has revolutionized how we provide care to our patients. Their understanding of healthcare workflows and compliance requirements was exceptional.',
        author: 'Dr. Robert Chen',
        position: 'Chief Medical Officer'
      },
      caseStudy: {
        title: 'Telemedicine Platform Development',
        challenge: 'HealthPlus needed a secure and compliant telemedicine solution to provide remote care to patients.',
        solution: 'Symbytes developed a comprehensive telemedicine platform with video consultations, electronic health records integration, and secure messaging.',
        results: [
          'Expanded patient reach by 200%',
          'Reduced no-show rates by 45%',
          'Improved provider efficiency by 30%',
          'HIPAA-compliant solution ensuring patient data security'
        ]
      }
    },
    {
      id: 4,
      name: 'Retail Innovations',
      industry: 'Retail',
      logo: '/images/clients/retail-innovations-logo.png',
      description: 'A retail company specializing in omnichannel shopping experiences.',
      testimonial: {
        text: 'The e-commerce platform developed by Symbytes has significantly improved our online presence and sales. Their team\'s attention to detail and commitment to quality is commendable.',
        author: 'Jennifer Lopez',
        position: 'VP of Digital Commerce'
      },
      caseStudy: {
        title: 'Omnichannel E-commerce Platform',
        challenge: 'Retail Innovations needed to unify their online and in-store shopping experiences to meet changing customer expectations.',
        solution: 'Symbytes developed an integrated e-commerce platform with inventory management, personalized recommendations, and seamless checkout experiences.',
        results: [
          '75% increase in online sales',
          '50% improvement in inventory accuracy',
          'Enhanced customer engagement with personalized shopping experiences',
          'Unified view of customer interactions across all channels'
        ]
      }
    }
  ]);

  // Fetch clients data from backend (commented out for now)
  /*
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        const data = await response.json();
        if (data.success) {
          setClients(data.clients);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);
  */

  const openCaseStudy = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="clients-page">
      <section className="clients-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Clients</h1>
            <p className="hero-subtitle">Trusted by leading companies across industries</p>
            <div className="client-logos">
              {clients.map(client => (
                <div key={client.id} className="client-logo-container">
                  <div className="client-logo-placeholder">
                    {client.name.charAt(0)}
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Industries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-overview">
        <div className="container">
          <div className="section-header">
            <h2>Who We Work With</h2>
            <p className="section-subtitle">
              At Symbytes Technologies, we partner with businesses of all sizes across various industries to deliver 
              innovative IT solutions that drive growth and efficiency. Our clients trust us for our expertise, 
              reliability, and commitment to their success.
            </p>
          </div>
          
          <div className="industry-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Technology</h3>
              <p>Helping tech companies innovate and scale with cutting-edge solutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Finance</h3>
              <p>Secure and compliant solutions for financial institutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare</h3>
              <p>HIPAA-compliant systems that improve patient care and efficiency.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Retail</h3>
              <p>Omnichannel solutions that enhance customer experiences.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Manufacturing</h3>
              <p>Optimizing operations with IoT and automation solutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>Digital learning platforms that transform education delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="client-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Client Success Stories</h2>
            <p className="section-subtitle">
              Discover how we've helped organizations across industries overcome challenges and achieve their business goals.
            </p>
          </div>
          
          <div className="showcase-tabs">
            <button 
              className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              <i className="fas fa-quote-right"></i> Testimonials
            </button>
            <button 
              className={`tab-btn ${activeTab === 'case-studies' ? 'active' : ''}`}
              onClick={() => setActiveTab('case-studies')}
            >
              <i className="fas fa-file-alt"></i> Case Studies
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'testimonials' && (
              <div className="testimonials-grid">
                {clients.map(client => (
                  <div key={client.id} className="testimonial-card">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="testimonial-content">
                      <p>{client.testimonial.text}</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <span>{client.testimonial.author.charAt(0)}</span>
                      </div>
                      <div className="author-info">
                        <h4>{client.testimonial.author}</h4>
                        <div className="author-details">
                          <span className="position">{client.testimonial.position}</span>
                          <span className="company">{client.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'case-studies' && (
              <div className="case-studies-grid">
                {clients.map(client => (
                  <div key={client.id} className="case-study-card">
                    <div className="case-study-header">
                      <div className="industry-badge">{client.industry}</div>
                      <h3>{client.caseStudy.title}</h3>
                      <p className="client-name">{client.name}</p>
                    </div>
                    <div className="case-study-preview">
                      <p><strong>Challenge:</strong> {client.caseStudy.challenge.substring(0, 100)}...</p>
                      <div className="key-result">
                        <i className="fas fa-chart-line"></i>
                        <span>{client.caseStudy.results[0]}</span>
                      </div>
                    </div>
                    <button 
                      className="btn btn-outline"
                      onClick={() => openCaseStudy({...client.caseStudy, clientName: client.name, industry: client.industry})}
                    >
                      View Case Study
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="client-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Industry Awards</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Become Our Next Success Story?</h2>
            <p>Let's discuss how we can help you achieve your business goals with our innovative IT solutions.</p>
            <button className="btn btn-primary">Contact Us Today</button>
          </div>
        </div>
      </section>

      {selectedCaseStudy && (
        <div className="case-study-modal-overlay" onClick={closeCaseStudy}>
          <div className="case-study-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCaseStudy}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <div className="industry-badge">{selectedCaseStudy.industry}</div>
              <h2>{selectedCaseStudy.title}</h2>
              <p className="client-name">{selectedCaseStudy.clientName}</p>
            </div>
            <div className="modal-body">
              <div className="case-study-section">
                <h3>Challenge</h3>
                <p>{selectedCaseStudy.challenge}</p>
              </div>
              <div className="case-study-section">
                <h3>Solution</h3>
                <p>{selectedCaseStudy.solution}</p>
              </div>
              <div className="case-study-section">
                <h3>Results</h3>
                <ul className="results-list">
                  {selectedCaseStudy.results.map((result, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Download PDF</button>
              <button className="btn btn-secondary" onClick={closeCaseStudy}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;