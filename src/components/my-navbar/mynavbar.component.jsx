import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logo.png';
import './mynavbar.style.css';

const MyNavbar = () => {
  return (
    <div>
    <Navbar collapseOnSelect 
    expand="md" 
    variant="dark"
    fixed="top"
    expand="md"
    className="animate-navbar nav-theme justify-content-between">
    <Navbar.Brand href="#come">
    <img className="logo" src={Logo} alt="my logo"/>
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skill">Skill</Nav.Link>
        <Nav.Link href="#experiences">Experiences</Nav.Link>
        <Nav.Link href="#project">Project</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}


export default MyNavbar;