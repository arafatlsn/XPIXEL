import React from 'react';
import './Footer.css'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer-container-parent'>
      <div className='footer-container'>
        <h3>X-PIXEL</h3>
        <p className='d-flex align-items-center fw-bold m-0'><BiCopyright className='me-1 fs-5'/> 2022 copyright reserved</p>
      </div>
    </div>
  );
};

export default Footer;