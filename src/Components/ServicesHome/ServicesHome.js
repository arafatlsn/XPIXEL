import React from 'react';
import './ServicesHome.css'
import { ImCamera } from 'react-icons/im'

const ServicesHome = () => {
  return (
    <div className='services-home-container'>
      <div className='mb-5'>
        <h1 className='service-heading'>SERVICES</h1>
        <div className='hr-div'>
          <p className='elemnetor-divider'></p>
        </div>
          <div className='service-home-container'>
            <div className='service-home-childrens'>
              <p className='text-center mb-1 mt-0' style={{fontSize: '2.5rem'}}><ImCamera style={{color: ' #e6ae4a'}}/></p>
              <h5 className='text-center fw-bold'>WEDDING SESSION</h5>
            </div>
            <div className='service-home-childrens'>
              <p className='text-center mb-1 mt-0' style={{fontSize: '2.5rem'}}><ImCamera style={{color: ' #e6ae4a'}}/></p>
              <h5 className='text-center fw-bold'>STUDIO SESSION</h5>
            </div>
            <div className='service-home-childrens'>
              <p className='text-center mb-1 mt-0' style={{fontSize: '2.5rem'}}><ImCamera style={{color: ' #e6ae4a'}}/></p>
              <h5 className='text-center fw-bold'>LIFESTYLE SESSION</h5>
            </div>
          </div>
      </div>
      <div>
        <h1 className='service-heading'>PRICING PLANS</h1>
      </div>
    </div>
  );
};

export default ServicesHome;