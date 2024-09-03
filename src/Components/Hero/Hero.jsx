import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../Hero/Hero.css';
import jumbotronImage from '../../assets/people.png';

const Hero = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <div id="hero-section" className={`hero-section ${hasLoaded ? 'animate-up' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-6 text-start">
          <h1>Welcome to The Virtual Aid Co.</h1>
          <p>Your gateway to the best opportunities</p>
          <Link
            className="btn"
            to="blog-section"
            smooth={true}
            duration={400}
            offset={-200}
          >
            Get to Know Us More..
          </Link>
        </div>
        <div className="col-6 text-end">
          <img src={jumbotronImage} alt="Hero Image" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
