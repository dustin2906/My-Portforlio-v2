import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import L_MAYVARY from "../../assets/img/experience/mayvarylogo.png";

import "./experiences.style.css";

const Experiences = () => {
  return (
    <div id="experiences">
    <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCES</h1>
    <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header className="d-flex justify-content-center flex-wrap resize">
                <Card.Img variant="top" className="img-resize" src={L_MAYVARY} alt="mayvary logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> WordPress, Woo-Commerce, HTML5, CSS3, JavaScript 
                    <br />
                    <strong>Duration:</strong> October 2019 - March 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Designing, coding, and modifying websites</strong>  in Wordpress. Strive to create visually appealing websites with user-friendly design and clear navigation.
                      </li>
                      <li><strong>Learn and support </strong> marketing campaigns in adapting new content to fit existing and new digital channels. 
                      </li>
                    </ul>                   
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Experiences;
