import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Modal from "react-bootstrap/Modal";
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMedium } from "react-icons/fa6";

function Home() {
  const [show, setShow] = useState(false);
  const form = useRef(null);
  const colors = [
    'black', 'midnightblue', 'darkblue', 'navy', 'darkgreen', 'darkslategray', 'darkslateblue', 'darkolivegreen', 'darkcyan', 'darkred',
    'darkmagenta', 'darkviolet', 'darkorange', 'darkorchid', 'darkgoldenrod', 'darkkhaki', 'darkseagreen', 'darkturquoise', 'darkred', 'darkorchid',
    'indigo', 'maroon', 'brown', 'saddlebrown', 'chocolate', 'firebrick', 'peru', 'sienna', 'darkgray', 'dimgray',
    'slategray', 'gray', 'darkpurple', 'darkindigo', 'darkslategrey', 'darkslateblue', 'darkolive', 'darkteal', 'darkred', 'darkplum',
    'darkcoral', 'darkslate', 'charcoal', 'darkmaroon', 'darkburgundy', 'darkmossgreen', 'darkhuntergreen', 'darkcharcoal', 'darkcopper', 'darkbronze',
    'darktaupe', 'darksmoky', 'darkamethyst', 'darkgarnet', 'darkscarlet', 'darkrusset', 'darkburntorange', 'darkpine', 'darkforestgreen', 'darkjade',
    'darkemerald', 'darkruby', 'darkamber', 'darktopaz', 'darkopal', 'darklapis', 'darkonyx', 'darkbistre', 'darkmahogany', 'darkcherry',
    'darkbloodred', 'darkmulberry', 'darkeggplant', 'darkfuchsia', 'darkrosewood', 'darkdahlia', 'darkamaranth', 'darkcrimson', 'darkmulberry', 'darkpuce',
    'darkumber', 'darkrusset', 'darkmahogany', 'darkrose', 'darkbordeaux', 'darkwine', 'darkplum', 'darkflax', 'darkcinnamon', 'darkumber',
    'darkcoffee', 'darkmocha', 'darkchocolate', 'darkebony', 'darkgunmetal', 'darkgraphite', 'darkash', 'darkcharcoal', 'darksteel', 'darkpewter'
  ];
  
   // Define the colors array

  const [selectedColor, setSelectedColor] = useState(colors[0]); // Start with the first color

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      setSelectedColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000); // Change color every second

    return () => clearInterval(colorChangeInterval); // Cleanup interval on component unmount
  }, [colors]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1Idp6g0_VmSYACgL0Sc_70_L0ukvqawp3/view?usp=sharing';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'RohanResume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_sg5xrnn', 'template_artpauz', form?.current, {
        publicKey: 'QnOdBsNqqswuqeaMa',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // navigate('/error');
    }
    handleClose();
  };

  return (
    <>
      <div className="home-body container-flex">
        <div className="home-main">
          <div className="home-content">
            <div className="text-con">
              <p className="iam">I'm</p>
              <h1>
                Ro<span className="sp-title" style={{ color: selectedColor }}>han</span>
              </h1>
              <p>
                I empower companies through data-driven excellence as a
                passionate Data Enthusiast.
              </p>

              <div className="hm-btns">
                <button className="hm-btn" onClick={handleDownload} style={{ backgroundColor: selectedColor }}>Download CV</button>
                <button onClick={handleShow} className="hm-btn" style={{ backgroundColor: selectedColor }}>
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
                    <div
                      className="card contact-card"
                      style={{
                        backgroundColor: "white",
                        maxWidth: "600px",
                        width: "90%",
                        margin: "1rem",
                        boxShadow: "1px 1px 20px 0 rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      <div className="card-body">
                        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                          <div className="form-group my-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              name="from_name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="user_email"
                              placeholder="Enter Your Email"
                              required
                            />
                            <small id="emailHelp" className="form-text text-secondary">
                              I'll never share your email with anyone else.
                            </small>
                          </div>
                          <div className="form-group my-3">
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
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="social-media-icons">
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
      </div>
    </>
  );
}

export default Home;
