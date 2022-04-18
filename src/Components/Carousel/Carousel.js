import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

const CarouselComp = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-imgs d-block w-100"
            src="carousel-img1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='crsl-cption-container'>
            <h3>WEDDING</h3>
            <p>1 Top Photographer + 1 Top Associate Photographer.Event Duration: 4 Hours. Number of Pictures: Unlimited (All post processed). Number of Photos: Unlimited (All post processed). Specially Edited Photos: 100 copies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-imgs d-block w-100"
            src="carousel-img2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className='crsl-cption-container'>
            <h3>STUDIO</h3>
            <p>1 Top Photographer. Event Duration: 4 Hours. Unlimited (All post processed). Specially Edited Photos: 100 copies. Print: 4R (4”x6″) Matte Prints: 100 copies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-imgs d-block w-100"
            src="carousel-img3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className='crsl-cption-container'>
            <h3>EXCLUSIVE</h3>
            <p>1 Senior Photographer + 1 Top Associate Photographer. Event Duration: 4 Hours. Number of Pictures: Unlimited (All post processed). Specially Edited Photos: 100 copies. Print: 12L (12”x 18″) Matte Print: 1 copy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;