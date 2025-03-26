// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-de604.firebaseapp.com",
  projectId: "next-estate-de604",
  storageBucket: "next-estate-de604.firebasestorage.app",
  messagingSenderId: "835906283438",
  appId: "1:835906283438:web:a7b203555fc2d365468a3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);