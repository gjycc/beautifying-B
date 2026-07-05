// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-pnvQUX3h4A0_dBjmu1D_oLixfgi9nD8",
  authDomain: "beauty-db-d8335.firebaseapp.com",
  projectId: "beauty-db-d8335",
  storageBucket: "beauty-db-d8335.firebasestorage.app",
  messagingSenderId: "959910654441",
  appId: "1:959910654441:web:2d3dc062d54b1410899b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };