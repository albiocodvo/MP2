import { useEffect, useState } from 'react';
import '../WhoWeAre/WhoWeAre.css';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('who-we-are');
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const triggerPoint = window.innerHeight * 0.005;

      if (window.scrollY + window.innerHeight > sectionTop + triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="who-we-are" className={`who-we-are-section ${isVisible ? 'visible' : ''}`}>
      <div className="container section-title">
        <h2>Who We Are</h2>
        <div className="title-underline"></div>
        <p>
          We're all about connecting talent with opportunity. Our mission? Making the job hunt and hiring easy-peasy for everyone.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>Empowering You</h3>
            <img src="../src/assets/bg1.jpg" className="img-fluid rounded-4 mb-4" alt="Job Search Platform" />
            <p>
              We know job hunting and hiring can be tough. That's why we built a platform with tools to make it a breeze—for both seekers and employers.
            </p>
            <p>
              From tailored job matches to smart tracking, we’ve got everything to make your journey smooth and successful.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Our cutting-edge tech ensures a seamless experience for all.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Smart job matching for the perfect fit.</li>
                <li><i className="bi bi-check-circle-fill"></i> Easy job posting and application tracking.</li>
                <li><i className="bi bi-check-circle-fill"></i> Powerful analytics for employers.</li>
              </ul>
              <p>
                We're all about using tech to make the job market work better for you. And we're always improving, thanks to your feedback.
              </p>
              <div className="position-relative mt-4">
                <img src="../src/assets/bg2.jpg" className="img-fluid rounded-4" alt="Platform Overview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
