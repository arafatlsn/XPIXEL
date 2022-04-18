import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div className='blogs-container'>
      <h1>Q. Difference between authorization and authentication?</h1>
      <p><mark>Ans.</mark></p>
      <h5>Authentication.</h5>
      <p>1. Usually the first step of a secuirity access control.</p>
      <p>Verifies the user's identity.</p>
      <p>Common methods include: username, password, answer to a secuirity question, code sent via SMS or email.</p>
      <p>It's visible by the user.</p>
      <br />
      <h5>Authorization</h5>
      <p>Usually comes after authentication.</p>
      <p>Grants or denies permissions to the user do something.</p>
      <p>Permission are granted and monitored by the organization.</p>
      <p>Common mehods include: role-based access control and attribute-based access control.</p>
      <p>It's not visible by the user.</p>
      <br />
      <br />
      <h1>Q. Why are you using firebase? What other options do you have to implement authentication?</h1>
      <p><mark>Ans.</mark></p>
      <p>Firebase Authentication makes building secure sign-ins for any platform easy. This end-to-end solution supports email and passowrd, phone auth, & mult-platform login. Some alternative of Firebase, Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB etc. </p>
      <br />
      <br />
      <h1>Q. What other services does firebase provide other than authentication?</h1>
      <p><mark>Ans.</mark></p>
      <p> Firebase provided these services Cloud Firestore.
      Cloud Functions.
      Authentication.
      Hosting.
      Cloud Storage.
      Google Analytics.
      Predictions.
Cloud Messaging. with  Authentication</p>
    </div>
  );
};

export default Blog;