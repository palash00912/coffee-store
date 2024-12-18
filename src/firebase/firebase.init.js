// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChk4BKgdzadFulSFTdX_QktQUZJIe2s0w",
  authDomain: "coffee-store-2e13f.firebaseapp.com",
  projectId: "coffee-store-2e13f",
  storageBucket: "coffee-store-2e13f.firebasestorage.app",
  messagingSenderId: "214603525770",
  appId: "1:214603525770:web:a9b48ead4d34f4acbf8773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);