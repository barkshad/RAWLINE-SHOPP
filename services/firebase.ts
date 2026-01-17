import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (RAWLINE)
const firebaseConfig = {
  apiKey: "AIzaSyDBuvCPjVz_NGOhbCyS7doOE1L6DkzQBHc",
  authDomain: "rawline-7b60c.firebaseapp.com",
  projectId: "rawline-7b60c",
  storageBucket: "rawline-7b60c.firebasestorage.app",
  messagingSenderId: "243225493014",
  appId: "1:243225493014:web:b9c730db24abcd74c2ff37",
  measurementId: "G-GG5BYHP5RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (browser only) - Safely wrapped to prevent crashes
let analytics = null;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn("Firebase Analytics failed to initialize (non-critical):", e);
  }
}

// ✅ INITIALIZE FIRESTORE
export const db = getFirestore(app);

export { analytics };