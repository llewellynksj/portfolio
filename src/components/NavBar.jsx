import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container className="">
        <Navbar.Brand href="#home">KSL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-end">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#employment">Employment</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
