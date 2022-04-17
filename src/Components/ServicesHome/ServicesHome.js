import React from 'react';
import './ServicesHome.css'
import { ImCamera } from 'react-icons/im'
import { BsCheckLg } from 'react-icons/bs'
import { MdLibraryAdd } from 'react-icons/md'

const ServicesHome = () => {
  return (
    <div className='services-home-container'>
      <div>
        <h1 className='service-heading'>PRICING PLANS</h1>
        <div className='element-seperator-div'>
          <p className='element-seperator m-0'></p>
        </div>
        <div className='pricing-plans-container'>
          <div className = 'pricing-plans-childrens'>
            <div>
              <p className='pricing-plans-icon'><ImCamera/></p>
              <h5 className='fw-bold text-center mb-4'>WEDDING SESSION</h5>
            </div>
            <div>
              <h3 className='text-center fw-bold mb-3'>$<span>700+</span></h3>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <button className='book-now-button d-flex align-items-center border'><MdLibraryAdd className='me-1'/> Book Now</button>
            </div>
          </div>
          <div className = 'pricing-plans-childrens'>
            <div>
              <p className='pricing-plans-icon'><ImCamera/></p>
              <h5 className='fw-bold text-center mb-4'>STUDIO SESSION</h5>
            </div>
            <div>
              <h3 className='text-center fw-bold mb-3'>$<span>300+</span></h3>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <button className='book-now-button d-flex align-items-center border'><MdLibraryAdd className='me-1'/> Book Now</button>
            </div>
          </div>
          <div className = 'pricing-plans-childrens'>
            <div>
              <p className='pricing-plans-icon'><ImCamera/></p>
              <h5 className='fw-bold text-center mb-4'>LIFESTYLE SESSION</h5>
            </div>
            <div>
              <h3 className='text-center fw-bold mb-3'>$<span>500+</span></h3>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
              <p className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> Featured Description #1
              </p>
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <button className='book-now-button d-flex align-items-center border'><MdLibraryAdd className='me-1'/> Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;