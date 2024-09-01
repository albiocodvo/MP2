import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import '../Reviews/Reviews.css';

function Reviews() {
  useEffect(() => {
    const section = document.querySelector('#blog-section');

    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.8;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('show');
      }
    };

    window.addEventListener('scroll', revealSection);
    revealSection();
    return () => window.removeEventListener('scroll', revealSection);
  }, []);

  return (
    <Container id="blog-section" className="my-5 slide-up">
      <h2 className="text-center mb-4">Here's what they say about us...</h2>
      <Carousel className="carousel-wrapper">
        <Carousel.Item>
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-caption-content">
              <h3>Jane Smith</h3>
              <p><strong>HR Manager at InnovateTech</strong></p>
              <p>"The Virtual Aid Co. has revolutionized our hiring process. Their platform is user-friendly and has helped us find top talent efficiently. Highly recommended for any organization looking to streamline their recruitment!"</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-caption-content">
              <h3>John Doe</h3>
              <p><strong>CEO of Creative Solutions</strong></p>
              <p>"I was impressed with how quickly The Virtual Aid Co. connected us with qualified candidates. Their support team is exceptional and always available to assist. A game-changer for our hiring strategy!"</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-caption-content">
              <h3>Emily Johnson</h3>
              <p><strong>Recruitment Specialist at NextGen</strong></p>
              <p>"Using The Virtual Aid Co. has been a breeze. The platform’s intuitive design and comprehensive features have made it our go-to tool for finding the best job candidates. Their attention to detail is remarkable!"</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-caption-content">
              <h3>Michael Brown</h3>
              <p><strong>Director of Talent Acquisition at FutureTech</strong></p>
              <p>"The Virtual Aid Co. exceeded our expectations with their seamless integration and effective job matching. Our hiring efficiency has greatly improved, and the results speak for themselves. A valuable partner in recruitment!"</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Reviews;
