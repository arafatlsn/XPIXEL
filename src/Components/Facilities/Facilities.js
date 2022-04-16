import React from 'react';
import './Facilities.css'
import { ImCamera } from 'react-icons/im'
import { MdHomeRepairService } from 'react-icons/md'
import { HiPhotograph } from 'react-icons/hi'

const Facilities = () => {
  return (
    <div className='facilities-container'>
      <div>
        <p className='text-center' style={{fontSize: '4rem'}}><ImCamera style={{color: '#e6ae4a'}}/></p>
        <h4 className='text-center fw-bold'>Amazing, fully-vetted photographers</h4>
        <p>Book a great photographer, hassle-free. Our hand-picked pros deliver professional photo shoots on-demand, at fixed prices from $89. Editing included.</p>
      </div>
      <div>
        <p className='text-center' style={{fontSize: '4rem'}}><MdHomeRepairService style={{color: '#e6ae4a'}}/></p>
        <h4 className='text-center fw-bold'>Exceptional
customer service</h4>
        <p>Book a great photographer, hassle-free. Our hand-picked pros deliver professional photo shoots on-demand, at fixed prices from $89. Editing included.</p>
      </div>
      <div>
        <p className='text-center' style={{fontSize: '4rem'}}><HiPhotograph style={{color: '#e6ae4a'}}/></p>
        <h4 className='text-center fw-bold'>Photography
quality guarantee</h4>
        <p>Book a great photographer, hassle-free. Our hand-picked pros deliver professional photo shoots on-demand, at fixed prices from $89. Editing included.</p>
      </div>
    </div>
  );
};

export default Facilities;