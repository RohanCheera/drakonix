import React, { useState } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios"; // Import Axios

import ColorPicker from '../../components/colorPicker/ColorPicker';
import "bootstrap/dist/css/bootstrap.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMedium } from "react-icons/fa6";


function Home() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleClose = () => {
    setShow(false);

  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-eosin-rho.vercel.app/api/form/submit', formData);
      console.log(response.data);
      alert('Message sent successfully');
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  const handleDownload = () => {
    // Replace 'path/to/cv.pdf' with the actual path to your CV file
    const fileUrl = 'https://drive.google.com/file/d/1Idp6g0_VmSYACgL0Sc_70_L0ukvqawp3/view?usp=sharing';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'RohanResume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedColor, setSelectedColor] = useState('blue');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="home-body container-flex">
        <div className="home-main ">
          <div className="home-content ">
            {/* <div className="home__img "></div> */}
            <div className="text-con">
              <p  className="iam">I'm</p>
              <h1>
                Ro<span className="sp-title" style={{ color: selectedColor}}>han</span>
              </h1>
              <p>
                I empower companies through data-driven excellence as a
                passionate Data Enthusiast.
              </p>

              <div className="hm-btns">
                <button className="hm-btn" onClick={handleDownload} style={{ backgroundColor: selectedColor}}>Download CV </button>
                <button onClick={handleShow} className="hm-btn" style={{ backgroundColor: selectedColor}}>
                  Contact Me
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Grab a coffee, dive into my portfolio{" "}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Title style={{ textAlign: "center" }}>
                    let's connect!{" "}
                  </Modal.Title>
                  <Modal.Body>
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
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="social-media-icons ">
          <div className="sm-icon email">
            <Link to="mailto:cheerarohan@gmail.com" className="email-link">
              <HiOutlineMail size={25} />
            </Link>
          </div>
          <div className="sm-icon linkedin">
            <Link
              to="https://www.linkedin.com/in/rohan-cheera/"
              className="linkedin-link"
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
          <div className="sm-icon twitter">
            <Link
              to="https://medium.com/@cheerarohan"
              className="twitter-link"
            >
              <FaMedium size={25} />
            </Link>
          </div>
          <div className="sm-icon insta">
            <Link
              to="https://www.instagram.com/rohan_cheera/"
              className="insta-link"
            >
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
        <div className="color-picker" style={{'display':'none'}}>
          <ColorPicker/>
        </div>
        <ColorPicker onColorSelect={handleColorSelect} />
      
      </div>

    </>
  );
}

export default Home;
