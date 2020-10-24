import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/first.jpg';
import Slide2 from '../../assets/img/carousal/second.jpg';
import Slide3 from '../../assets/img/carousal/third.jpg';
import ScrollDown from '../ScrollDown/scrollDown.component';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './my-carousal.style.css';


const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} interval={2500} pause={false} >
        <Carousel.Item >
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default MyCarousal;
