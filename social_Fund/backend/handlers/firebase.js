import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtjyRYJWQFwiS0l8q9QiRRtjh1vSeFVRI",
    authDomain: "social-fund.firebaseapp.com",
    projectId: "social-fund",
    storageBucket: "social-fund.appspot.com",
    messagingSenderId: "129094905939",
    appId: "1:129094905939:web:b16ae1808305081173d6a6",
    measurementId: "G-XW9CEXVCWS"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };