import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';

import {skills} from './skillData';
import './skill.style.css';


const Skills = () => {
  return (
    <div className="pt-3 pb-3" id='skill'>
        <h1 className="text-center font-details-b pb-4"> Tech Skill</h1>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {/** Front-end */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  {/* Frontend */}
                  <LightSpeed left>
                  <Card.Title className="text-center  card-title">Frontend</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                      {skills.frontend.map((skill, index) => (
                        <span className="p-2" key={index}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </a>
                        </span>
                      ))}
                  </Card.Text>
                  </LightSpeed>
                </Card.Body>
              </Card>
            </Col>

            
            {/* Backend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
              <Roll top>        
                <Card.Body>
                  <Card.Title className="text-center  card-title">Backend</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.backend.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Roll>  
              </Card>

              {/* Hosting Platforms */}
              <Card className="focus mt-2 mb-2 ">
              <Roll bottom> 
                <Card.Body>
                  <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.hostingPlatforms.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
                </Roll>  
              </Card>
            </Col>

            
            
            <Col md={4}>
              {/* Database */}
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                <LightSpeed right>
                    <Card.Title className="text-center  card-title">Database</Card.Title>
                    <hr />
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                      {skills.databases.map((skill, index) => (
                        <span className="p-2" key={index}>
                          <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </Card.Text>
                  </LightSpeed>
                </Card.Body>
              </Card>
              {/* Version Control */}

              <Card className="focus mt-2 mb-2">
                <Card.Body>
                <LightSpeed right>
                  <Card.Title className="text-center  card-title">Version Control</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2">
                      <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                        <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                      </a>
                    </span>
                  </Card.Text>
                </LightSpeed>
                </Card.Body>
              </Card>

              {/* Programming Languages */}
              <Card className="focus mt-2 mb-2">
              <Card.Body>
              <LightSpeed right>
                  <Card.Title className="text-center  card-title"> Other Programming Languages</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.programmingLanguages.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
              </LightSpeed>
              </Card.Body>
              </Card>
            </Col>

        </Row>
        </CardDeck>
      </div>
  )
}

export default Skills;
