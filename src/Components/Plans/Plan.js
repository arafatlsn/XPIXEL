import React, { useContext } from 'react';
import './Plan.css'
import { ImCamera } from 'react-icons/im'
import { BsCheckLg } from 'react-icons/bs'
import { MdLibraryAdd } from 'react-icons/md'
import { PlanContext } from '../../App';
import { Link } from 'react-router-dom';

const Plan = ({ elPlan }) => {
  const { plan, price, description } = elPlan;

  const { setPlan } = useContext(PlanContext)

  return (
    <div>
      <div className = 'pricing-plans-childrens'>
            <div>
              <p className='pricing-plans-icon'><ImCamera/></p>
              <h5 className='fw-bold text-center mb-4'>{plan}</h5>
            </div>
            <div>
              <h3 className='text-center fw-bold mb-3'>$<span>{price}+</span></h3>
            </div>
            <div>
              {
                description?.map(elDesc => <p title={elDesc} className='d-flex align-items-center'>
                <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> {elDesc.length > 20 ? elDesc.slice(0, 20) + '...' : elDesc}
              </p>)
              }
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <Link to={ '/checkout' } className='text-decoration-none'>
                <button onClick={() => setPlan(elPlan)} className='book-now-button d-flex align-items-center border'><MdLibraryAdd className='me-1'/> Book Now</button>
              </Link>
            </div>
          </div>
    </div>
  );
};

export default Plan;