// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirebase } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrL6ynsWnMuZ2PC0LRjmIe5s9w3vlDvT4",
  authDomain: "penseive-3.firebaseapp.com",
  projectId: "penseive-3",
  storageBucket: "penseive-3.appspot.com",
  messagingSenderId: "869976699439",
  appId: "1:869976699439:web:f35b903adbf80f2b9f8cda",
  measurementId: "G-DJVWVKC7XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);