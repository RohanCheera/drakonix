import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  const handleLinkClick = () => {
    const offcanvasElement = document.querySelector('.offcanvas');
    if (offcanvasElement) {
      const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  };

  return (
    <>
      <Navbar key="lg" expand="lg" className="navbarmenu bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} exact to="/">
            Rohan Cheera
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={NavLink}
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/work"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Projects
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
