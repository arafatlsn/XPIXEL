import React, { useContext, useState } from 'react';
import { PlanContext } from '../../App';
import { BsCheckLg } from 'react-icons/bs'
import './Checkout.css'
import useSignIn from '../../Hooks/useSignIn';

const Checkout = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const { choosePlan } = useContext(PlanContext);
  const { plan, price, description, images } = choosePlan;

  const handleReload = e => {
    e.preventDefault()
  }

  return (
    <div className='checkout-parent-container'>
      <h1 className='checkout-address-heading fw-bold'>YOUR PLAN</h1>
      <div className='element-seperator-checkout'>
          <p className='element-seperator m-0'></p>
        </div>
      <div className='checkout-address-container'>
        {
          plan ? <div>
          <h3>{plan}</h3>
          <p>Experienced and skilled repairmen will free you from many problems! You’ll definitely will be pleased with the result as we guarantee the best service!</p>
          {
          description?.map(elDesc => <p title={elDesc} className='d-flex align-items-center'>
          <BsCheckLg className='me-1' style={{color: '#e6ae4a'}}/> {elDesc}
          </p>)
          }
          <h4>${price}+</h4>
        </div> : <div className='plan-notfound-alt'><p className='text-center fs-2 fw-bold' style={{color: 'dimgray'}}>Please choose a Plan</p></div>
        }
        <div className='plan-form-side'>
        <form onSubmit={handleReload}>
            <div>
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="name">Name</label> <br />
              <input className='input-field p-lg-2 w-100 fw-bold' type="text" name='name' required /> <br />
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="phone">Phone</label> <br />
              <input className='input-field p-lg-2 w-100 fw-bold' type="text" required /> <br />
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="address">Address</label> <br />
              <textarea className='input-field p-lg-2 w-100 fw-bold' required></textarea>
              <div className='d-flex flex-column mt-5'>
                <input className='fs-5 fw-bold py-1' style={{backgroundColor: '#e6ae4a', color: 'white', borderStyle: 'hidden', borderRadius: '.3rem'}} type="submit" value={'Submit'} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='checkout-btn-div border'>
        <button className='checkout-btn'>Checkout</button>
      </div>
      <div className='session-img-container-parent'>
        <h2 className='text-center fw-bold'>LOOK MY PROJECT</h2>
        <div className='element-seperator-checkout'>
          <p className='element-seperator m-0'></p>
        </div>
        <div className='look-image-container'>
          {
            images?.map(elImag => <img className='look-image-img' src={elImag}></img>)
          }
        </div>
      </div>
    </div>
  );
};

export default Checkout;