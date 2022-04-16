import React from 'react';
import CarouselComp from '../Carousel/Carousel';
import Facilities from '../Facilities/Facilities';
import ServicesHome from '../ServicesHome/ServicesHome';

const Homepage = () => {
  return (
    <div>
      <CarouselComp></CarouselComp>
      <Facilities></Facilities>
      <ServicesHome></ServicesHome>
    </div>
  );
};

export default Homepage;