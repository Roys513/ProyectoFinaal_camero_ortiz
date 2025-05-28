// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entrega-final-curso-react-ch.firebaseapp.com",
  projectId: "entrega-final-curso-react-ch",
  storageBucket: "entrega-final-curso-react-ch.firebasestorage.app",
  messagingSenderId: "390145676377",
  appId: "1:390145676377:web:02f72d24e0bc4d6bbf0d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
