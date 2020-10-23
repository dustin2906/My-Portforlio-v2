import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {Parallax} from 'react-parallax';
import Container from 'react-bootstrap/Container';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/titleMessage/titlemessage.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experiences from './pages/experiences/experiences.component';
import ProjectTimeline from './components/projectTimeline/projectTimeline.component';
import Contact from './pages/contactForm/contactForm.component';
import Footer from './components/footer/footer.component';
import Particles from 'react-particles-js';
import {particlesOptions} from './particlesOptions';
import './App.css';


const App = () => {
  return (
    <div className="App" style={{ position: "relative"}} >
    <MyCarousal />
    <TitleMessage />
    <MyNavbar />
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
    {/* About Me section*/}
    <div>
      <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/data1.png")}
            bgImageAlt=""
            strength={100}
      >
      <div>
        <Container className="container-box rounded">
          <Fade  duration={500}>
            <About />
          </Fade>
        </Container>
      </div>
      </Parallax>
      </div>
      {/** Skill Section */}
      <div>
        <Container className="container-box rounded">
          <Fade  duration={500}>
          <hr />
            <Skills />
          </Fade>
        </Container>
      </div>
      {/** Experiences Section */}
      <div>
      <Container className="container-box rounded">
          <Slide bottom  duration={500}>
          <hr />
            <Experiences />
          </Slide>
        </Container>
      </div>
      {/** Projects Section */}
      <div>
        <Container className="container-box rounded">
          <Fade  duration={500}>
          <hr />
            <ProjectTimeline />
          </Fade>
        </Container>
      </div>
      {/** Contact Section */}
      <div>
        <Container className="container-box rounded">
          <Fade  duration={500}>
          <hr />
            <Contact />
          </Fade>
        </Container>
      </div>{/** Contact Section */}
          <Fade  duration={500}>
          <hr />
            <Footer />
            
          </Fade>

    </div>
  );
}

export default App;