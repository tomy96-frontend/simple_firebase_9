import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCfZYLAtrA6XnOqMe7d61-QZ-DKz1hCmpU",
    authDomain: "firstproject-1615b.firebaseapp.com",
    projectId: "firstproject-1615b",
    storageBucket: "firstproject-1615b.appspot.com",
    messagingSenderId: "625048803068",
    appId: "1:625048803068:web:7afa65cffeaee181dd6979"
  };

//init firebaseapp
initializeApp(firebaseConfig);

//init service db = database
const db = getFirestore();

//collection reference
const colReference = collection(db, 'games')