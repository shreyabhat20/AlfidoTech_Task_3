// firebase.js

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjg8i0RMMIcRpHV7lrsDdi_6bGpovirN4",
  authDomain: "project1-a3443.firebaseapp.com",
  projectId: "project1-a3443",
  storageBucket: "project1-a3443.appspot.com",
  messagingSenderId: "647901803725",
  appId: "1:647901803725:web:1d761e79e0bf5a5256e584",
  measurementId: "G-BC3C43ZDD6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
