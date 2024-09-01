import { Link } from 'react-scroll';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <div id="hero-section" className="hero-section">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-6 text-start">
          <h1>Welcome to The Virtual Aid Co.</h1>
          <p>Your gateway to the best opportunities</p>
          <Link
            className="nav-link"
            to="who-we-are"
            smooth={true}
            duration={300}
          >
            <button className="btn">Get Started</button>
          </Link>
        </div>
        <div className="col-6 text-end">
          <img src="../../src/assets/people.png" alt="Hero Image" className="hero-image"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
