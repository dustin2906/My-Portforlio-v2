import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
} from '@merc/react-timeline';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// projects
import L_ReactReviewMovie from '../../assets/img/projects/reviewmovie.png';
import L_TODOLIST from '../../assets/img/projects/TODOLIST.png';
import L_MyPortfoliov1 from '../../assets/img/projects/myportfoliov1.png';




// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html5-icon.png";
import L_CSS3 from "../../assets/img/skills/css3-icon.png";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

import './projectTimeline.style.css';

const ProjectTimeline = () => {
  return (
    <div id="project">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/** Project: Review Movie */}
          <ImageEvent 
            date="20/10/2020"
            className="text-center"
            text="React Review Movie App"
            src={L_ReactReviewMovie}
            alt="React Review Movie"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>  

                    <Accordion.Collapse 
                      eventKey="0"
                      className="text-left"
                      >
                      <Card.Body>
                        <strong>Description:</strong> This is a Review Movie App created with React and ReactRouter that review popular movies for internet users. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Review and Search Popular Movies </li>
                          <li>Powered by React, ReactRouter and the Movie DB</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="ReactRouter"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactRouter
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                href="https://dustin2906.github.io/review-Movie/"
                target="_blank">
                SEE LIVE
                </UrlButton>
                <UrlButton
                href="https://github.com/dustin2906/review-Movie"
                target="_blank">
                SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/** Project: ToDoList */}
          <ImageEvent 
          date="10/6/2020"
          className="text-center"
          text="NodeJS TodoList"
          src={L_TODOLIST}
          alt="NodeJs TodoList"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>  

                  <Accordion.Collapse 
                    eventKey="0"
                    className="text-left"
                    >
                    <Card.Body>
                      <strong>Description:</strong> This is a Todo List App created with JavaScript,NodeJS and and deployed on Heroku (data was saved in MongoDB atlas) that keeps a track of your Todos.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Keeps track of your todo </li>
                        <li>Powered by NodeJS, Heroku, MongoDB</li>
                        <li>Responsive Design</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="Js"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE_JS}
                              alt="NodeJS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            NodeJS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="ExpressJS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            ExpressJS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MONGODB}
                              alt="MongoDB"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            MongoDB
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
              href="https://mysterious-sands-19230.herokuapp.com/"
              target="_blank">
              SEE LIVE
              </UrlButton>
              <UrlButton
              href="https://github.com/dustin2906/todoList-by-NodeJS"
              target="_blank">
              SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

          {/** Project: My Portfolio v1 */}
          <ImageEvent 
          date="23/6/2020"
          className="text-center"
          text="My Portfoliov1"
          src={L_MyPortfoliov1}
          alt="My Portfoliov1"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>  

                  <Accordion.Collapse 
                    eventKey="0"
                    className="text-left"
                    >
                    <Card.Body>
                      <strong>Description:</strong> This is my Portfolio v1 created with HTML5, CSS3, JavaScript, and Bootstrap to show a description about me, my projects in MAYVARY. 
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Introduce about my-self, my experiences, my projects. </li>
                        <li>Powered by JavaScript, Bootstrap</li>
                        <li>Responsive Design</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="Js"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP4}
                              alt="Bootstrap4"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Bootstrap4
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
              href="https://dustin2906.github.io/my-cv/"
              target="_blank">
              SEE LIVE
              </UrlButton>
              <UrlButton
              href="https://github.com/dustin2906/my-cv"
              target="_blank">
              SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>
        
        </Events>
      </Timeline>
    </div>
  )
}

export default ProjectTimeline;
