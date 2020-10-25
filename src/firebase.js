import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSDlh4PmZK2FcH39YcNVeWk_IxMf1IJf0",
  authDomain: "clone-b16ca.firebaseapp.com",
  databaseURL: "https://clone-b16ca.firebaseio.com",
  projectId: "clone-b16ca",
  storageBucket: "clone-b16ca.appspot.com",
  messagingSenderId: "423934500537",
  appId: "1:423934500537:web:83471cd301446d6dba4568",
  measurementId: "G-G46RFRQSZ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
