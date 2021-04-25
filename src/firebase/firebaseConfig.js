import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA0M8QtJaXeb5I49MUl8ZCQSG1D2pWhVBU",
  authDomain: "proyecto-escalab-6bfb4.firebaseapp.com",
  projectId: "proyecto-escalab-6bfb4",
  storageBucket: "proyecto-escalab-6bfb4.appspot.com",
  messagingSenderId: "414499244099",
  appId: "1:414499244099:web:23bc292e2fc87337c56cf6",
  measurementId: "G-RGJT2F242X",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}