import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Style/Carousel.css';
import ExampleCarouselImage from '../assets/image/hamsterEjem1.jpg'; 
import img2 from '../assets/image/Hamsterejem2.jpeg'
import img3 from '../assets/image/RHamsEjem3.jpeg'

function Carouseel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={ExampleCarouselImage} className=" d-block w-100" alt="First slide"  />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouseel;
