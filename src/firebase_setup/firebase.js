// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp({
  apiKey: "AIzaSyBwno8kHaLKGg9_Y4iGuKo8-Hpx2rd8Z6s",
  authDomain: "berealocated-58df8.firebaseapp.com",
  projectId: "berealocated-58df8",
  storageBucket: "berealocated-58df8.appspot.com",
  messagingSenderId: "39257330305",
  appId: "1:39257330305:web:b949fea51c6a3e8d233380",
  measurementId: "G-EBYFYRV1SF"

});

const auth = getAuth(app);


var provider = new GoogleAuthProvider();

export { app, provider };
// Initialize Firebase
const storage = getStorage(app);
export default storage;