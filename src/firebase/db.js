// Import the functions you need from the SDKs you need, next line was added in order
// to work for firebase v8
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBICg-pEHuRZw4WqvCF30KiARFj2EJyVDc",
  authDomain: "form-fb-8c6c3.firebaseapp.com",
  projectId: "form-fb-8c6c3",
  storageBucket: "form-fb-8c6c3.appspot.com",
  messagingSenderId: "133144256748",
  appId: "1:133144256748:web:b2edc462909611fe5cc5c9"
});

// Initialize Firebase
const db = firebaseApp.firestore()

export {db}
