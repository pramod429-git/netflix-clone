// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPnb-9lXXPs_gynpZEP9k4QrqsHIArYSI",
  authDomain: "netflixclone-5cd5c.firebaseapp.com",
  projectId: "netflixclone-5cd5c",
  storageBucket: "netflixclone-5cd5c.firebasestorage.app",
  messagingSenderId: "529896924841",
  appId: "1:529896924841:web:005802d3f529c093ed6bb8",
  measurementId: "G-HBS9HQ454M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
