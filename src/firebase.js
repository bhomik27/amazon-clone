import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Om-VQEY9p2dWvQLjZhuWyc6I67EFL9Y",
  authDomain: "clone-2edb2.firebaseapp.com",
  databaseURL: "https://clone-2edb2-default-rtdb.firebaseio.com",
  projectId: "clone-2edb2",
  storageBucket: "clone-2edb2.appspot.com",
  messagingSenderId: "949900091898",
  appId: "1:949900091898:web:a1a9f56910352520000443",
  measurementId: "G-BJLQF9GYV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };