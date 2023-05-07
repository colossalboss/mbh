// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGgrGAh-3n5bJwF-1Ql5BaR9X90836188",
  authDomain: "simple-bat-staging.firebaseapp.com",
  projectId: "simple-bat-staging",
  storageBucket: "simple-bat-staging.appspot.com",
  messagingSenderId: "894926905210",
  appId: "1:894926905210:web:3372aadce5c547f45f80c3",
  measurementId: "G-HTMBBMKQB9"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

const db = getFirestore();
export { db, collection, getDocs };