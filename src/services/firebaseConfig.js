import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfQBIIuV5T7bjpnq9128DAu9XXytz8OKg",
  authDomain: "walt-cd1cc.firebaseapp.com",
  projectId: "walt-cd1cc",
  storageBucket: "walt-cd1cc.appspot.com",
  messagingSenderId: "1026630529573",
  appId: "1:1026630529573:web:d1094809b034a3ce3e45cc",
  measurementId: "G-5HCHG2XG8Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;