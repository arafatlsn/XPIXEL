import React from 'react';
import auth from '../FireBase/firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useSignIn = () => {
  // use auth state 
  const [user, loading, error] = useAuthState(auth);
  // google signin
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  // facebook signin 
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  // signin with email and password 
  const [
    signInWithEmailAndPassword,
    userSignInWithEmailPass,
    loadingSignInWithEmailPass,
    errorSignInWithEmailPass,
  ] = useSignInWithEmailAndPassword(auth);
  // create account with emai password 
  const [
    createUserWithEmailAndPassword,
    userCreateEnP,
    loadingCreateEnP,
    errorCreateEnP,
  ] = useCreateUserWithEmailAndPassword(auth);
  // email varification 
  const [sendEmailVerification, sending, errorVarification] = useSendEmailVerification(auth);
  // forget password email 
  const [sendPasswordResetEmail, sendingForget, errorForget] = useSendPasswordResetEmail(
    auth
  );

  return { user, loading, signInWithGoogle, signInWithFacebook, createUserWithEmailAndPassword, signInWithEmailAndPassword, errorSignInWithEmailPass, sendEmailVerification, sendPasswordResetEmail }
};

export default useSignIn;