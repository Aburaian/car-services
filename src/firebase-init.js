// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW1ox0w9OpY7iiv-w3ydM9dNe8StlZ4iE",
  authDomain: "genius-car-service-57da4.firebaseapp.com",
  projectId: "genius-car-service-57da4",
  storageBucket: "genius-car-service-57da4.appspot.com",
  messagingSenderId: "1008214065553",
  appId: "1:1008214065553:web:d2e7bff58ab0bc06885a30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
