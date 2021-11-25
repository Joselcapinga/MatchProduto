import { initializeApp } from  "firebase/firebase-app";
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

initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export default Appfirebase;



/*
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEYQVZrMajkPJEuFcxvQxwFt3AMKABykA",
  authDomain: "programacaomobile-3a050.firebaseapp.com",
  projectId: "programacaomobile-3a050",
  storageBucket: "programacaomobile-3a050.appspot.com",
  messagingSenderId: "620556361707",
  appId: "1:620556361707:web:1736ba69f5b328548883ae"
};

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};



*/