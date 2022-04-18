import React, { useState } from 'react';
import './Signin.css'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSignIn from '../../Hooks/useSignIn';
import { toast } from 'react-toastify';

const Signin = () => {

  const { user, signInWithGoogle, signInWithFacebook, signInWithEmailAndPassword, errorSignInWithEmailPass, sendPasswordResetEmail } = useSignIn()

  console.log(errorSignInWithEmailPass?.message)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleReload = e => {
    e.preventDefault()
  }

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const notify = () => toast('Reset Password Link sent Your E-mail.')
  

  if(user){
    navigate(from, { replace: true })
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
              <p onClick={() => {
                if(email.includes('@')){
                  sendPasswordResetEmail(email)
                  notify()
                }
              }} className='forget-password-text'>Forget Password?</p>
              <div className='d-flex flex-column mt-5'>
                <input onClick={() => {
                  signInWithEmailAndPassword(email, password)
                }} className='fs-5 fw-bold py-1' style={{backgroundColor: '#e6ae4a', color: 'white', borderStyle: 'hidden', borderRadius: '.3rem'}} type="submit" value={'Sign-in'} />
              </div>
              {
                errorSignInWithEmailPass ? <p className='m-0 text-center text-danger'>{errorSignInWithEmailPass?.message}</p> : ''
              }
            </div>
          </form>
          <div className='element-divider'>
            <p className='hr-one'></p>
            <p className='or-text m-0 fw-bold'>OR</p>
            <p className='hr-two'></p>
          </div>
          <div className='d-flex flex-column' >
            <button onClick={() => signInWithFacebook()} className='sign-with-btn border py-3 my-1 d-flex align-items-center justify-content-center fw-bold'><BsFacebook className='fs-4 me-1' style={{color: '#1771E6'}}/> Continue with Facebook</button>
            <button onClick={() => signInWithGoogle()} className='sign-with-btn border py-3 my-1 d-flex align-items-center justify-content-center fw-bold'><FcGoogle className='fs-4 me-1'/> Continue with Google</button>
          </div>
          <p className='text-center mt-4' style={{color: 'dimgray'}}>Not on X-PIXEL yet? <Link to={'/signup'} className='fw-bold'>Sign-up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;