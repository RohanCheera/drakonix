import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './cta.css';

const CTA = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status
  const [successMessage, setSuccessMessage] = useState(''); // State to manage success message
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClose = () => {
    setShow(false);
    setSuccessMessage('');
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the submit button

    try {
      const response = await fetch('https://drakonix.vercel.app/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccessMessage('Rohan will connect with you soon...');
    } catch (error) {
      console.error('Error submitting form:', error);
      navigate('/error'); // Navigate to error page
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>

      <Button variant="outline-dark" className="ctabtn" onClick={handleShow}>Contact</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's connect!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage ? (
            <p>{successMessage}</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose} disabled={isSubmitting}>
                Close
              </Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CTA;
