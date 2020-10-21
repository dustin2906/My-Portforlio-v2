import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Myprofile from '../../assets/img/profile/myprofile.JPG';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';

import './about.style.css';

const About = () => {
  return (
    <div id='about'>
    <div className="about">
      <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          {/* Profile picture */}
          <Col xs={12} md={6}>
          <Zoom left>
            <Row className="justify-content-center mb-2 mr-2 ">
              <Image className="justify-content-end profile" alt="profile" src={Myprofile} thumbnail fluid />
            </Row>
          </Zoom>
          </Col>
          {/* About ME Description */}
          <Col xs={12} md={6}>
          <Zoom right>
            <Row className=" align-items-start p-2 my-details rounded">
            {/** Description */}
            Hi there! I am <strong>&nbsp; Duc Ngo </strong> 
            <br />A passionate programmer and a learner, born and grow up in VietNam. At present, I am a web developer with ReactJS, Redux, ExpressJS, NodeJS, Bootstrap and WordPress  in Helsinki, Finland.
            <br />
            <br /> I graduated Business Information Technology at LapLand University Of Applied Sciences in 2020. I have learned valuable professional skills such as web application development, data management, and web design.
            <br />
            <br /> Furthermore, I studied E-Business, Project management, Data warehouse, IT Security, and ERP with SAP tool in Frankfurt University Of Applied Sciences , Germany. In both my academic and professional life, I have been consistently praised as hard-working by my professors and peers.
            <br />
            <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
            <br /> <br />
            {/** Buttom */}
            <Col className="d-flex justify-content-center flex-wrap">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/19HBjnf1zgAzZlvKjSzp_Pu7xJcqRw5Kt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/dustin2906" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nguyen-minh-duc-ngo/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
            </Row>
          </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default About;
