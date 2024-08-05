// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJUrbfC_peHSReMRU2nI8Ol10pRLT7lo",
  authDomain: "inventory-tracker-841ab.firebaseapp.com",
  projectId: "inventory-tracker-841ab",
  storageBucket: "inventory-tracker-841ab.appspot.com",
  messagingSenderId: "183002517463",
  appId: "1:183002517463:web:2331831726f42b45968592",
  measurementId: "G-P4YC2YCH1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}