// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl9jOGKrJFfmTL2oOzmQg0SUsVxIfYZtg",
  authDomain: "make-web-authentication.firebaseapp.com",
  projectId: "make-web-authentication",
  storageBucket: "make-web-authentication.appspot.com",
  messagingSenderId: "138842518300",
  appId: "1:138842518300:web:6085b0d3e47ec295d580d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;