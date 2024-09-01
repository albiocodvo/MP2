import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>The Virtual Aid. Co</h2>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Who We Are</a></li>
            <li><a href="#services">Testimonies</a></li>
            <li><a href="#contact">Let's Talk!</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>Copyright Series of 2024 - Christian & Arnel</p>
          <img src='../../src/assets/tvac-logo-1.png' alt="Footer Logo" className="footer-logo-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
