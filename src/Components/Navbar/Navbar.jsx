import React from 'react';
import './Navbar.css';
import TopBar from '../TopBar/TopBar';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <TopBar />
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <RouterLink className="navbar-brand" to="/">The Virtual Aid Co.</RouterLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="hero-section"
                  smooth={true}
                  duration={300}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="who-we-are"
                  smooth={true}
                  duration={300}
                >
                  Who We Are
                </ScrollLink>
              </li>
              <li className="nav-item dropdown">
                <RouterLink className="nav-link dropdown-toggle" to="/what-we-offer" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What We Offer
                </RouterLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><RouterLink className="dropdown-item" to="/what-we-offer#employers">For Employers</RouterLink></li>
                  <li><RouterLink className="dropdown-item" to="/what-we-offer#applicants">For Applicants</RouterLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="blog-section"
                  smooth={true}
                  duration={500}
                >
                  Blog
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="lets-talk"
                  smooth={true}
                  duration={300}
                >
                  Let's Talk!
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
