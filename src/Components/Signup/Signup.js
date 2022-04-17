import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSignIn from '../../Hooks/useSignIn';
import './Signup.css'

const Signup = () => {

  const { user, createUserWithEmailAndPassword } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleReload = e => {
    e.preventDefault()
  }

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  if(user){
    navigate(from, {replace: true} )
  }

  return (
    <div className='signin-container'>
      <div className='form-parent-container'>
        <div className='sign-heading-div'>
          <h1 className='text-center fw-bold' style={{color: '#e6ae4a'}}>X-PIXEL</h1>
          <h2 className='text-center fw-bold' style={{color: '#212529'}}>Welcome To X-Pixel</h2>
        </div>
        <div>
          <form onSubmit={handleReload}>
            <div>
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="email">Email</label> <br />
              <input onBlur={(e) => setEmail(e.target.value)} className='input-field p-lg-2 w-100 fw-bold' type="email" name='email' required /> <br />
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="password">Password</label> <br />
              <input onBlur={(e) => setPassword(e.target.value)} className='input-field p-lg-2 w-100 fw-bold' type="password" required /> <br />
              <label style={{color: '#e6ae4a'}} className='fs-5 fw-bold' htmlFor="confirm-password">Confirm Password</label> <br />
              <input className='input-field p-lg-2 w-100 fw-bold' type="password" name='confirm-password' required /> <br />
              <div className='d-flex flex-column mt-5'>
                <input onClick={() => createUserWithEmailAndPassword(email, password)} className='fs-5 fw-bold py-1' style={{backgroundColor: '#e6ae4a', color: 'white', borderStyle: 'hidden', borderRadius: '.3rem'}} type="submit" value={'Sign-up'} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;