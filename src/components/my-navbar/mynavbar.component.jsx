import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import "./mynavbar.style.css";
import styled from "styled-components";

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const MyNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNavbar(document.body.getBoundingClientRect().top > scrollPos);
  };
  let navDisplay = showNavbar ? "active" : "hidden";
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Transition>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className={`nav-theme justify-content-between  ${navDisplay}`}
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="my logo" />
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              <Nav.Link href="#experiences">Experiences</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Transition>
  );
};

export default MyNavbar;
