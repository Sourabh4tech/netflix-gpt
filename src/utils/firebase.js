// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpPlFfb8XNOKMcbn4XkCI6T42iNi0rt_w",
  authDomain: "netflix-app-ede2a.firebaseapp.com",
  projectId: "netflix-app-ede2a",
  storageBucket: "netflix-app-ede2a.firebasestorage.app",
  messagingSenderId: "734415606031",
  appId: "1:734415606031:web:c24e02e3c6983c8e9a2e7a",
  measurementId: "G-KRPED4TDQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();