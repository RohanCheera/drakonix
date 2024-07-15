import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  return (
    <>
      <Navbar key='lg' expand='lg' className="navbarmenu bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} exact to="/">Rohan Cheera</Navbar.Brand>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
          <Navbar.Offcanvas
            id={'offcanvasNavbar-expand-lg'}
            aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
                <Nav.Link as={NavLink} to="/work" activeClassName="active">Projects</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
