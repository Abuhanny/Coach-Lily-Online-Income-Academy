// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoT4pTDIePS7ophus16BjxZzNW-V0MSPk",
  authDomain: "coach-lily-academy.firebaseapp.com",
  projectId: "coach-lily-academy",
  storageBucket: "coach-lily-academy.firebasestorage.app",
  messagingSenderId: "684479611079",
  appId: "1:684479611079:web:fbea66d7d3fe7572173ee2",
  measurementId: "G-E73T479JGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);