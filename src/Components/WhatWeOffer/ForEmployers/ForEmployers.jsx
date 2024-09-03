import { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import '../ForEmployers/ForEmployers.css';

const ForEmployers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.contact-form-container');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 1.5;

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
        <h2>Post a Job</h2>
        <form>
          <div className="form-group">
            <label htmlFor="contactName">Name of Person in Contact</label>
            <input type="text" id="contactName" className="form-control" placeholder="Type Your Name Here" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email Address</label>
            <input type="email" id="contactEmail" className="form-control" placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">Phone Number</label>
            <input type="tel" id="contactPhone" className="form-control" placeholder="xxxxxxxxxxx" required />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" className="form-control" placeholder="Please Enter the Job Title" required />
          </div>
          <div className="form-group">
            <label htmlFor="salaryRange">Salary Range</label>
            <input type="text" id="salaryRange" className="form-control" placeholder="Enter The Salary Range" required />
          </div>
          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea id="jobDescription" className="form-control" rows="6" placeholder="Input text here...." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForEmployers;
