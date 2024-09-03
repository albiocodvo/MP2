import React from 'react';
import './TopBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopBar = () => {
  return (
    <div id="topbar" className="topbar d-flex align-items-center justify-content-center justify-content-md-between">
      <div className="container d-flex align-items-center">
        <div className="contact-infos d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">tvaco@gmail.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+63 123 456 7890</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center ms-auto">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
