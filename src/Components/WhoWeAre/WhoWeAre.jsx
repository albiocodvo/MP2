import { useEffect, useState } from 'react';
import '../WhoWeAre/WhoWeAre.css';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('who-we-are');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 2;

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="who-we-are" className={`who-we-are-section ${isVisible ? 'visible' : ''}`}>
      <div className="container section-title">
        <h2>Who We Are</h2>
        <p>At The Virtual Aid Co., we are dedicated to connecting talented individuals with meaningful job opportunities. Our mission is to bridge the gap between job seekers and employers through innovative and user-friendly platforms.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>Empowering Job Seekers and Employers Alike</h3>
            <img src="../src/assets/bg1.jpg" className="img-fluid rounded-4 mb-4" alt="Job Search Platform" />
            <p>At The Virtual Aid Co., we understand the challenges of job hunting and recruitment. Our platform offers a comprehensive suite of tools designed to streamline the job search process for candidates and simplify hiring for employers.</p>
            <p>From personalized job recommendations to advanced applicant tracking, we provide solutions that enhance the job search experience and drive success. We are committed to making the job market more accessible and efficient for everyone involved.</p>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Our platform is built with the latest technology to ensure a seamless and intuitive user experience for both job seekers and employers.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> <span>Advanced job matching algorithms to connect you with the right opportunities.</span></li>
                <li><i className="bi bi-check-circle-fill"></i> <span>Easy-to-use interface for posting jobs and managing applications.</span></li>
                <li><i className="bi bi-check-circle-fill"></i> <span>Comprehensive analytics and reporting tools for employers.</span></li>
              </ul>
              <p>
                We are passionate about leveraging technology to create a more efficient job market. Our team is dedicated to continuously improving our platform based on user feedback and industry trends.
              </p>

              <div className="position-relative mt-4">
                <img src="../src/assets/bg2.jpg" className="img-fluid rounded-4" alt="Platform Overview" />
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
