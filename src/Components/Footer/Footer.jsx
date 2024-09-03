import React from 'react';
import '../Footer/Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();

    
    navigate('/');

    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>The Virtual Aid. Co</h2>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" onClick={(e) => handleScrollToSection(e, 'topbar')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScrollToSection(e, 'who-we-are')}>Who We Are</a></li>
            <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'blog-section')}>Testimonies</a></li>
            <li><a href="#contact" onClick={(e) => handleScrollToSection(e, 'lets-talk')}>Let's Talk!</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>Copyright Series of 2024 - Christian & Arnel</p>
          <img src='../public/tvac-logo-1.png' alt="Footer Logo" className="footer-logo-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
