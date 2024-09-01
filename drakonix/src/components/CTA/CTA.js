import React, { useRef, useState } from "react";
import { Button,  Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './cta.css';
import emailjs from '@emailjs/browser';


const CTA = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const form=useRef(null);
  const [successMessage, setSuccessMessage] = useState(''); // State to manage success message
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClose = () => {
    setShow(false);
    setSuccessMessage('');
  };
  const handleShow = () => setShow(true);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      console.log("form",formData,form);
      emailjs
      .sendForm('service_sg5xrnn', 'template_artpauz', form?.current, {
        publicKey: 'QnOdBsNqqswuqeaMa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setSuccessMessage('Rohan will connect with you soon...');
    } catch (error) {
      console.error('Error submitting form:', error);
      navigate('/error'); // Navigate to error page
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
            
            <div
                className="card contact-card "
                style={{
                  backgroundColor:"white",
                  maxWidth: "600px",
                  width: "90%",
                  marginLeft: "1rem",
                  boxShadow: "1px 1px 20px 0 rgba(255, 255, 255, 0.4)", // Add this line for the box shadow
                }}
              >
                <div class="card-body">
                  <form ref={form} onSubmit={(e)=> handleSubmit(e)}>
                    <div className="form-group my-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="from_name"
                        required
                      />
                    </div>
                    <div className="form-group ">
                      <input
                        type="email"
                        className="form-control"
                        name="user_email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <small id="emailHelp" className="form-text text-secondary ">
                        I'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group  my-3">
                      <textarea
                        type="text"
                        rows={5}
                        className="form-control form-message"
                        placeholder="Enter Message Here"
                        name="message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-dark"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CTA;
