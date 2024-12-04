// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGY-1hw3WzyZ9WQj58A4C56rBxBosHtU",
  authDomain: "buybusy-reduxtoolkit.firebaseapp.com",
  projectId: "buybusy-reduxtoolkit",
  storageBucket: "buybusy-reduxtoolkit.firebasestorage.app",
  messagingSenderId: "565144061480",
  appId: "1:565144061480:web:94eb1b8c6f4c697cba171d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);