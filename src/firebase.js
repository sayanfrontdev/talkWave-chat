import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


/// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8JW6CseWbEwirFUOySxa8yh8FF39se6A",
  authDomain: "chat-72.firebaseapp.com",
  projectId: "chat-72",
  storageBucket: "chat-72.appspot.com",
  messagingSenderId: "908272801885",
  appId: "1:908272801885:web:947c6f4e50f1f0ab7395b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()