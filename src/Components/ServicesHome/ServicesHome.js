import React from 'react';
import './ServicesHome.css'
import usePlans from '../../Hooks/AllPlans';
import Plan from '../Plans/Plan';

const ServicesHome = () => {

  const { allPlans, setPlans } = usePlans()

  return (
    <div  id='checkout' className='services-home-container'>
      <div>
        <h1 className='service-heading'>PRICING PLANS</h1>
        <div className='element-seperator-div'>
          <p className='element-seperator m-0'></p>
        </div>
        <div className='pricing-plans-container'>
          {
            allPlans?.map(elPlan => <Plan key={elPlan.id} elPlan={elPlan} >hello js</Plan>)
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;