import React, { useEffect } from 'react';
import '../LetsTalk/LetsTalk.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LetsTalk = () => {

  useEffect(() => {
    const section = document.querySelector('.lets-talk-section');

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
    <div className="lets-talk-section slide-up">
      <h2 className="slide-up">Let's Talk!</h2>
      <Form>
        <div className="container my-5">
          <Form.Group id="lets-talk" className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LetsTalk;
