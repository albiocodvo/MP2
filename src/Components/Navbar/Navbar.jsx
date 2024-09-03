import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import TopBar from '../TopBar/TopBar';

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleScrollToSection = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('lets-talk');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <>
      <TopBar />
      <nav id="mynavbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">The Virtual Aid Co.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
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
                <Link className="nav-link dropdown-toggle" to="/what-we-offer" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                  What We Offer
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/what-we-offer/employers">For Employers</Link></li>
                  <li><Link className="dropdown-item" to="/what-we-offer/applicants">For Applicants</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleScrollToSection}>
                  Let's Talk!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
