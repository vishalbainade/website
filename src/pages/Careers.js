import React, { useState } from 'react';
import '../styles/pages/Careers.css';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'New York, NY (Remote Option)',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      posted: 'June 15, 2023',
      description: 'We are looking for an experienced Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of modern web technologies and a passion for creating user-friendly interfaces.',
      requirements: [
        'At least 5 years of experience in frontend development',
        'Proficiency in React.js, JavaScript, HTML5, and CSS3',
        'Experience with state management libraries (Redux, Context API)',
        'Knowledge of responsive design and cross-browser compatibility',
        'Familiarity with testing frameworks (Jest, React Testing Library)'
      ],
      responsibilities: [
        'Develop and maintain responsive web applications',
        'Collaborate with designers and backend developers',
        'Optimize applications for maximum speed and scalability',
        'Implement and maintain quality assurance processes',
        'Stay up-to-date with emerging trends and technologies'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer (Node.js)',
      location: 'San Francisco, CA (Remote Option)',
      type: 'Full-time',
      description: 'We are seeking a skilled Backend Developer with experience in Node.js to join our engineering team. The successful candidate will be responsible for developing and maintaining server-side applications and APIs.',
      requirements: [
        'At least 3 years of experience in backend development',
        'Strong proficiency in Node.js and Express.js',
        'Experience with database systems (PostgreSQL, MongoDB)',
        'Knowledge of RESTful API design principles',
        'Familiarity with containerization (Docker) and CI/CD pipelines'
      ],
      responsibilities: [
        'Design and implement scalable backend services',
        'Develop and maintain RESTful APIs',
        'Optimize database queries and performance',
        'Implement security and data protection measures',
        'Collaborate with frontend developers to integrate user-facing elements'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      location: 'Chicago, IL (Remote Option)',
      type: 'Full-time',
      description: 'We are looking for a DevOps Engineer to help us build and maintain our infrastructure and deployment pipelines. The ideal candidate will have experience with cloud platforms and containerization technologies.',
      requirements: [
        'At least 4 years of experience in DevOps or similar role',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Proficiency in containerization (Docker) and orchestration (Kubernetes)',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage and optimize cloud infrastructure',
        'Implement monitoring and logging solutions',
        'Ensure system security and compliance',
        'Collaborate with development teams to improve deployment processes'
      ]
    }
  ];

  const openJobModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p className="hero-subtitle">Build your career at Symbytes Technologies</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Employee Rating</span>
              </div>
            </div>
            <button className="btn btn-primary hero-btn" onClick={() => document.querySelector('.careers-content').scrollIntoView({ behavior: 'smooth' })}>
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <section className="careers-overview">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Us</h2>
            <p className="section-subtitle">
              At Symbytes Technologies, we believe in fostering a collaborative and innovative work environment 
              where talented individuals can thrive and grow. We are committed to providing our employees with 
              opportunities for professional development and career advancement.
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Cutting-Edge Technology</h3>
              <p>Work with the latest technologies and tools in the industry.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Culture</h3>
              <p>Join a team of passionate professionals who value collaboration and innovation.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career advancement opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible work arrangements to help you maintain a healthy work-life balance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Reach</h3>
              <p>Work with clients and team members from around the world.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Comprehensive Benefits</h3>
              <p>Health insurance, retirement plans, and other competitive benefits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-content">
        <div className="container">
          <div className="careers-tabs">
            <button 
              className={`tab-btn ${activeTab === 'openings' ? 'active' : ''}`} 
              onClick={() => setActiveTab('openings')}
            >
              <i className="fas fa-briefcase"></i> Current Openings
            </button>
            <button 
              className={`tab-btn ${activeTab === 'process' ? 'active' : ''}`} 
              onClick={() => setActiveTab('process')}
            >
              <i className="fas fa-clipboard-list"></i> Hiring Process
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'openings' && (
              <div className="job-openings">
                <h2>Current Job Openings</h2>
                <div className="job-filters">
                  <div className="filter-group">
                    <label>Department:</label>
                    <select>
                      <option>All Departments</option>
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Location:</label>
                    <select>
                      <option>All Locations</option>
                      <option>Remote</option>
                      <option>New York</option>
                      <option>San Francisco</option>
                      <option>Chicago</option>
                    </select>
                  </div>
                </div>
                <div className="job-list">
                  {jobOpenings.map(job => (
                    <div key={job.id} className="job-card">
                      <div className="job-header">
                        <h3>{job.title}</h3>
                        <div className="job-meta">
                          <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                          <span><i className="fas fa-briefcase"></i> {job.type}</span>
                          {job.salary && <span><i className="fas fa-money-bill-wave"></i> {job.salary}</span>}
                          {job.posted && <span><i className="fas fa-calendar-alt"></i> Posted: {job.posted}</span>}
                        </div>
                      </div>
                      <div className="job-content">
                        <p className="job-summary">{job.description}</p>
                        <div className="job-preview">
                          <h4>Key Requirements:</h4>
                          <ul className="preview-list">
                            {job.requirements.slice(0, 3).map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="job-actions">
                        <button className="btn btn-outline" onClick={() => openJobModal(job)}>
                          View Details
                        </button>
                        <button className="btn btn-primary">Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="hiring-process">
                <h2>Our Hiring Process</h2>
                <p className="process-intro">
                  We've designed our hiring process to be thorough yet efficient, allowing us to find the best talent 
                  while providing candidates with a positive experience. Here's what you can expect:
                </p>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Application Review</h3>
                      <p>Our recruitment team reviews your application and resume to assess your qualifications and experience.</p>
                      <div className="step-timeline">
                        <span className="timeline-label">Timeline:</span> 1-2 business days
                      </div>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Initial Screening</h3>
                      <p>A brief phone or video call to discuss your background, experience, and interest in the position.</p>
                      <div className="step-timeline">
                        <span className="timeline-label">Timeline:</span> 30-45 minutes
                      </div>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Technical Assessment</h3>
                      <p>Depending on the role, you may be asked to complete a technical assessment or coding challenge.</p>
                      <div className="step-timeline">
                        <span className="timeline-label">Timeline:</span> 2-3 hours (take-home)
                      </div>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Interview Rounds</h3>
                      <p>Multiple interviews with team members, potential colleagues, and managers to assess technical skills and cultural fit.</p>
                      <div className="step-timeline">
                        <span className="timeline-label">Timeline:</span> 2-3 rounds, 1 hour each
                      </div>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3>Final Decision</h3>
                      <p>We'll make a decision and extend an offer to the selected candidate.</p>
                      <div className="step-timeline">
                        <span className="timeline-label">Timeline:</span> Within 1 week of final interview
                      </div>
                    </div>
                  </div>
                </div>
                <div className="process-note">
                  <i className="fas fa-info-circle"></i>
                  <p>The entire process typically takes 2-3 weeks from application to offer, though this may vary depending on the position and number of applicants.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="employee-testimonials">
        <div className="container">
          <h2>What Our Team Says</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Working at Symbytes has been an incredible journey. The collaborative environment and opportunities for growth have helped me develop both professionally and personally."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>JD</span>
                </div>
                <div className="author-info">
                  <h4>Jane Doe</h4>
                  <p>Senior Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The work-life balance at Symbytes is exceptional. I'm able to pursue my passions while working on challenging projects with cutting-edge technologies."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>JS</span>
                </div>
                <div className="author-info">
                  <h4>John Smith</h4>
                  <p>DevOps Engineer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've grown more in my two years at Symbytes than in my previous five years combined. The mentorship and learning opportunities here are unmatched."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>AJ</span>
                </div>
                <div className="author-info">
                  <h4>Alice Johnson</h4>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See a Suitable Position?</h2>
            <p>We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.</p>
            <button className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i> Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {showModal && selectedJob && (
        <div className="job-modal-overlay" onClick={closeJobModal}>
          <div className="job-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeJobModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <h2>{selectedJob.title}</h2>
              <div className="job-meta">
                <span><i className="fas fa-map-marker-alt"></i> {selectedJob.location}</span>
                <span><i className="fas fa-briefcase"></i> {selectedJob.type}</span>
                {selectedJob.salary && <span><i className="fas fa-money-bill-wave"></i> {selectedJob.salary}</span>}
                {selectedJob.posted && <span><i className="fas fa-calendar-alt"></i> Posted: {selectedJob.posted}</span>}
              </div>
            </div>
            <div className="modal-body">
              <div className="job-section">
                <h3>About the Role</h3>
                <p>{selectedJob.description}</p>
              </div>
              <div className="job-section">
                <h3>Requirements</h3>
                <ul className="job-list">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="job-section">
                <h3>Responsibilities</h3>
                <ul className="job-list">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div className="job-section">
                <h3>What We Offer</h3>
                <ul className="job-list">
                  <li>Competitive salary and benefits package</li>
                  <li>Flexible work arrangements</li>
                  <li>Professional development opportunities</li>
                  <li>Collaborative and innovative work environment</li>
                  <li>Modern office space with amenities</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={closeJobModal}>
                Close
              </button>
              <button className="btn btn-primary">
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;