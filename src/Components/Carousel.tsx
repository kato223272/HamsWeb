import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Style/Carousel.css';
import ExampleCarouselImage from '../assets/image/hamsterEjem1.jpg'; 
import img2 from '../assets/image/Hamsterejem2.jpeg'
// import img3 from '../assets/image/RHamsEjem3.jpeg'

function Carouseel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='imgCarousel'>
        <img src={ExampleCarouselImage} className=" d-block w-100" 
        alt="First slide" 
        style={{width: "100%"}}  />
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className='imgCarousel'>
        <img src={img2} className=" d-block w-100" 
        alt="First slide" 
        style={{width: "100%"}}  />
        </div>
       
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className='imgCarousel'>
        <img src={img3} className=" d-block w-100" 
        alt="First slide" 
        style={{width: "100%"}}  />
        </div>
       
      </Carousel.Item> */}
    
    </Carousel>
  );
}

export default Carouseel;
