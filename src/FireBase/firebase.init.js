// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATF3l1zJSCRvwshu8IU2zul3VYsak-mrU",
  authDomain: "x-pixel-demo.firebaseapp.com",
  projectId: "x-pixel-demo",
  storageBucket: "x-pixel-demo.appspot.com",
  messagingSenderId: "560219420185",
  appId: "1:560219420185:web:845307fa6ffe7589029c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth