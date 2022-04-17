import React from 'react';
import CarouselComp from '../Carousel/Carousel';
import Facilities from '../Facilities/Facilities';
import ServicesHome from '../ServicesHome/ServicesHome';

const Homepage = () => {
  return (
    <div>
      <CarouselComp></CarouselComp>
      <Facilities></Facilities>
      <div>
      <ServicesHome></ServicesHome>
      </div>
    </div>
  );
};

export default Homepage;