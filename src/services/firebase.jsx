// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSwmIxWKNWTvt-FcKB1Sg-Xu4xKgN3RrA",
  authDomain: "coder-comision-87990.firebaseapp.com",
  projectId: "coder-comision-87990",
  storageBucket: "coder-comision-87990.firebasestorage.app",
  messagingSenderId: "173177924929",
  appId: "1:173177924929:web:79bc61edac0c1b94e745c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);