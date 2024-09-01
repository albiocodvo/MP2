import React, { useEffect } from 'react';
import '../LetsTalk/LetsTalk.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Preferred Date of Meeting</Form.Label>
            <DatePicker
              selected={new Date()}
              onChange={(date) => console.log(date)}
              className="form-control"
              placeholderText="Select a date"
            />
          </Form.Group>
          <div className="form-row">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Your Phone Number" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LetsTalk;
