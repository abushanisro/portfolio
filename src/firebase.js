// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtS3ASdY-5qnO39FJDQdUlii9IFYJH26s",
  authDomain: "protfolio-540d5.firebaseapp.com",
  projectId: "protfolio-540d5",
  storageBucket: "protfolio-540d5.firebasestorage.app",
  messagingSenderId: "588131307673",
  appId: "1:588131307673:web:8891a9c10472f34f9b6808"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Only export db here, no need to import it in the same file
export { db };
