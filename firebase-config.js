// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_rDX_asPmDfPUKMGCptkKeOGir65s45I",
  authDomain: "adventure-tribe-41304.firebaseapp.com",
  projectId: "adventure-tribe-41304",
  storageBucket: "adventure-tribe-41304.firebasestorage.app",
  messagingSenderId: "107688212796",
  appId: "1:107688212796:web:7cd5491af04afe54ea0639",
  measurementId: "G-6FFH6DE1J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
