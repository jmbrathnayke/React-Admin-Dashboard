// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJYPjdrB4inqeGanQmejLULIfajYR280c",
  authDomain: "admin-dashboard01.firebaseapp.com",
  projectId: "admin-dashboard01",
  storageBucket: "admin-dashboard01.firebasestorage.app",
  messagingSenderId: "1045892381810",
  appId: "1:1045892381810:web:dbbda6476022ff413916eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);