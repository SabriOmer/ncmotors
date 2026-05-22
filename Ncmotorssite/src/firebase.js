import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyDkn3Lppv_nGBy5mDkaRAPUkhBLhdFfOkc",
  authDomain: "nc-motors.firebaseapp.com",
  projectId: "nc-motors",
  storageBucket: "nc-motors.firebasestorage.app",
  messagingSenderId: "251338263435",
  appId: "1:251338263435:web:bc0b5e00aa5dd32c2cbd8e",
  measurementId: "G-N3TL2HW4QD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);