// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPawNg-RthI9Hz7HRjkDaSYLNo6i2DH8g",
  authDomain: "chimera-b9b42.firebaseapp.com",
  projectId: "chimera-b9b42",
  storageBucket: "chimera-b9b42.firebasestorage.app",
  messagingSenderId: "1049470181889",
  appId: "1:1049470181889:web:1a2a723607c97f70359600",
  measurementId: "G-DDBSE78ZF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, analytics };
