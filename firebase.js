// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/firebase-app";
import { getAnalytics } from "./node_modules/firebase/firebase-analytics";
import { getDatabase, ref, set, push, onValue } from './node_modules/firebase/firebase-database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9jN8XbZLI2Z3ojrd2swkD2Dcjo8v8YUE",
  authDomain: "websitewith-db.firebaseapp.com",
  projectId: "websitewith-db",
  storageBucket: "websitewith-db.firebasestorage.app",
  messagingSenderId: "849115844236",
  appId: "1:849115844236:web:02df52bae0924753a4b5a9",
  measurementId: "G-PR6YL5JHZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, set, push, onValue };