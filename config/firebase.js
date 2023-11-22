// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
 import { getFirestore } from "firebase/firestore";3
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAILBxpPDYAU3rvuBgejzbVLYqXmLfeFmw",
  authDomain: "lms-crud-812ea.firebaseapp.com",
  projectId: "lms-crud-812ea",
  storageBucket: "lms-crud-812ea.appspot.com",
  messagingSenderId: "298884123828",
  appId: "1:298884123828:web:e235454d3e26d7062d5be1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app)
export const db = getFirestore(app);




// const firebaseConfig = {
//   apiKey: "AIzaSyAILBxpPDYAU3rvuBgejzbVLYqXmLfeFmw",
//   authDomain: "lms-crud-812ea.firebaseapp.com",
//   projectId: "lms-crud-812ea",
//   storageBucket: "lms-crud-812ea.appspot.com",
//   messagingSenderId: "298884123828",
//   appId: "1:298884123828:web:e235454d3e26d7062d5be1"
// };

