import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar" >
    <Container>
      <Navbar.Brand href="#home" className='text-white fw-bold'>FetchApi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='h'>Home</Nav.Link>
          <Nav.Link className='h' >About</Nav.Link>
          <Nav.Link className='h' >SignUp</Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar