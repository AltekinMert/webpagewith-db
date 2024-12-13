
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpKsUy8c9gHfwF2amIQ3ISS2KUGCEFIAo",
    authDomain: "serverwith-db.firebaseapp.com",
    databaseURL: "https://serverwith-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "serverwith-db",
    storageBucket: "serverwith-db.firebasestorage.app",
    messagingSenderId: "120620490279",
    appId: "1:120620490279:web:5fc8c83419a24ed6f17802",
    measurementId: "G-YRVSXDY0VV",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getDatabase(app);
  console.log("Firebase app initialized:", app);


import { get, child } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Test database connection
get(child(ref(db), 'test/connectionCheck'))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log('Data:', snapshot.val());
    } else {
      console.log('No data available at this path.');
    }
  })
  .catch((error) => {
    console.error('Error reading data from Firebase:', error);
  });

  