// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-807a2.firebaseapp.com",
  projectId: "mern-blog-807a2",
  storageBucket: "mern-blog-807a2.appspot.com",
  messagingSenderId: "710060446083",
  appId: "1:710060446083:web:52c66be39f942fe37526b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
