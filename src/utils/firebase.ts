// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyyxwszmvhKsm8ggDtO8cwJCgRDR29p_E",
  authDomain: "netflixgpt-4d88b.firebaseapp.com",
  projectId: "netflixgpt-4d88b",
  storageBucket: "netflixgpt-4d88b.appspot.com",
  messagingSenderId: "1030393329317",
  appId: "1:1030393329317:web:568a2db27d9a76c67f7f4c",
  measurementId: "G-578DNMR7Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();