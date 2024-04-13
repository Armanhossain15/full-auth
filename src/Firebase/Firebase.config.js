// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu00iXrRlpYbBnxYyuhxRZFUYf6lvhJs8",
  authDomain: "fullauth-7ab4a.firebaseapp.com",
  projectId: "fullauth-7ab4a",
  storageBucket: "fullauth-7ab4a.appspot.com",
  messagingSenderId: "72719359387",
  appId: "1:72719359387:web:db6eb36b90473ac084553e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth