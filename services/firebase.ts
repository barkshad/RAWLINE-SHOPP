
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBuvCPjVz_NGOhbCyS7doOE1L6DkzQBHc",
  authDomain: "rawline-7b60c.firebaseapp.com",
  projectId: "rawline-7b60c",
  storageBucket: "rawline-7b60c.firebasestorage.app",
  messagingSenderId: "243225493014",
  appId: "1:243225493014:web:b9c730db24abcd74c2ff37",
  measurementId: "G-GG5BYHP5RZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
