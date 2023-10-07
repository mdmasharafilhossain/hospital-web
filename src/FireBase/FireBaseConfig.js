// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFGPNSvBIm49RkqGfFVhXdzkEh7iuubUw",
  authDomain: "health-fare-react-router-fireb.firebaseapp.com",
  projectId: "health-fare-react-router-fireb",
  storageBucket: "health-fare-react-router-fireb.appspot.com",
  messagingSenderId: "353598033266",
  appId: "1:353598033266:web:1e6f6d1e751a0268ed61eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;