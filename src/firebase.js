// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVW0N96MQFO0dIxvFUEEnrWzE93qa3s7U",
  authDomain: "learning-manage-app.firebaseapp.com",
  projectId: "learning-manage-app",
  storageBucket: "learning-manage-app.appspot.com",
  messagingSenderId: "537105847956",
  appId: "1:537105847956:web:9a376834925a0624e48681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;