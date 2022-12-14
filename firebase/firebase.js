// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseApiKey } from "../secrets/apiKey";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mymoni-3bfee.firebaseapp.com",
  projectId: "mymoni-3bfee",
  storageBucket: "mymoni-3bfee.appspot.com",
  messagingSenderId: "1048094909650",
  appId: "1:1048094909650:web:a06c8547d5313efee5390b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const authentication = getAuth(app);