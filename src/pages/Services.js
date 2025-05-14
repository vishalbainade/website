import React from 'react';
import '../styles/pages/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications that drive business growth. We specialize in responsive design, e-commerce solutions, and content management systems.',
      features: [
        'Custom Website Design',
        'E-commerce Development',
        'Content Management Systems',
        'Progressive Web Apps',
        'API Development & Integration'
      ],
      icon: 'fas fa-code'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices. We create engaging, user-friendly apps that deliver exceptional experiences.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Maintenance & Support'
      ],
      icon: 'fas fa-mobile-alt'
    },
    {
      id: 3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help businesses optimize their technology infrastructure and processes. We provide expert advice tailored to your specific needs.',
      features: [
        'IT Strategy Development',
        'Digital Transformation',
        'Technology Assessment',
        'Process Optimization',
        'IT Roadmap Planning'
      ],
      icon: 'fas fa-laptop-code'
    },
    {
      id: 4,
      title: 'Cloud Services',
      description: 'Secure and scalable cloud solutions to enhance your business operations. We help you migrate to the cloud and optimize your cloud infrastructure.',
      features: [
        'Cloud Migration',
        'AWS/Azure/Google Cloud',
        'Cloud Infrastructure Management',
        'Serverless Architecture',
        'Cloud Security'
      ],
      icon: 'fas fa-cloud'
    },
    {
      id: 5,
      title: 'DevOps Services',
      description: 'Streamline your development and operations processes with our DevOps services. We help you implement CI/CD pipelines and automate your workflows.',
      features: [
        'CI/CD Implementation',
        'Infrastructure as Code',
        'Containerization (Docker)',
        'Kubernetes Orchestration',
        'Monitoring & Logging'
      ],
      icon: 'fas fa-cogs'
    },
    {
      id: 6,
      title: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence and machine learning to gain insights from your data and automate complex processes.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems',
        'Custom AI Solutions'
      ],
      icon: 'fas fa-brain'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="new">
          <h1>Our Services</h1>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <h2>What We Offer</h2>
          <p>
            At Symbytes Technologies, we provide a wide range of IT services designed to help businesses 
            leverage technology for growth and innovation. Our team of experts is committed to delivering 
            high-quality solutions that address your specific challenges and requirements.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss how our services can help you achieve your goals.</p>
          <button className="btn btn-primary">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Services;