// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDb5Qin5TZuKbLzV1hud6CSsp-VJiQOUfA",
  authDomain: "netflix-7b68f.firebaseapp.com",
  projectId: "netflix-7b68f",
  storageBucket: "netflix-7b68f.appspot.com",
  messagingSenderId: "955585881011",
  appId: "1:955585881011:web:176f986eaf4d3d56a4a1c6",
  measurementId: "G-76JRLJ3P2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
