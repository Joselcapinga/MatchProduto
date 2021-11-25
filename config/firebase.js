//import { initializeApp } from  "firebase/firebase-app";
import Firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

//crencias do firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEYQVZrMajkPJEuFcxvQxwFt3AMKABykA",
  authDomain: "programacaomobile-3a050.firebaseapp.com",
  projectId: "programacaomobile-3a050",
  storageBucket: "programacaomobile-3a050.appspot.com",
  messagingSenderId: "620556361707",
  appId: "1:620556361707:web:1736ba69f5b328548883ae"
};

if(Firebase.app.length === 0 ){
  F = Firebase.initializeApp(firebaseConfig); 
}

export default Firebase;
