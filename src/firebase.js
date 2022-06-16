import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkHSRx1NuRMJxRExO6ndtmgA3O1MMhUf4",
  authDomain: "instagram-clone-3c3ca.firebaseapp.com",
  databaseURL: "https://instagram-clone-3c3ca-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-3c3ca",
  storageBucket: "instagram-clone-3c3ca.appspot.com",
  messagingSenderId: "701314884089",
  appId: "1:701314884089:web:bfec29a3a0705f9fe59d28",
  measurementId: "G-GLTSK0C2LZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
