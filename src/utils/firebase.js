// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-next-5c58a.firebaseapp.com",
  projectId: "blog-next-5c58a",
  storageBucket: "blog-next-5c58a.appspot.com",
  messagingSenderId: "672028434604",
  appId: "1:672028434604:web:9425d7684c7eaf9e32ff09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
