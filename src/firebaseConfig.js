import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4dGomI9TMJ7RWBEFf8l8P7XNJNyQg9rQ",
  authDomain: "proyectocoderreact1.firebaseapp.com",
  projectId: "proyectocoderreact1",
  storageBucket: "proyectocoderreact1.appspot.com",
  messagingSenderId: "175608970077",
  appId: "1:175608970077:web:42934cf6580c1056c346b4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);