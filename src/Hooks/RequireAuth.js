import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSignIn from './useSignIn';

const RequireAuth = ({ children }) => {
  const { user, loading } = useSignIn()
  const location = useLocation()

  if(loading){
    return;
  }

  if(!user){
    return <Navigate to={'/signin'} state={{ from: location }} replace />
  }
  return children
};

export default RequireAuth;