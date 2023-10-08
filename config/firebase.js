// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";3
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeNFg_LspMqTojb0sDcUec8cohVogQvCM",
  authDomain: "students-admin-panel.firebaseapp.com",
  projectId: "students-admin-panel",
  storageBucket: "students-admin-panel.appspot.com",
  messagingSenderId: "1079013840194",
  appId: "1:1079013840194:web:eed99584762fcf381d24db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);