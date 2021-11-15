import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAeoGqYLiikhg6W-c2aGxvnVATDHHjOz10",
  authDomain: "licon-db9be.firebaseapp.com",
  projectId: "licon-db9be",
  storageBucket: "licon-db9be.appspot.com",
  messagingSenderId: "202143516001",
  appId: "1:202143516001:web:8c2af5a2cec85918f3f120",
  measurementId: "G-D2X5TDN3XC"

};

firebase.initializeApp(firebaseConfig);

export default firebase;