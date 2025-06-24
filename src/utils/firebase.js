import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //

const firebaseConfig = {
  apiKey: "AIzaSyBMSp1Tunq6LP6PjyUBnUUmUyYtoYFiVAM",
  authDomain: "netflixgpt-37da5.firebaseapp.com",
  projectId: "netflixgpt-37da5",
  storageBucket: "netflixgpt-37da5.firebasestorage.app",
  messagingSenderId: "893947786851",
  appId: "1:893947786851:web:4a7cefbc7529b979152a56",
  measurementId: "G-Z5W9XKL77Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Pass 'app' here