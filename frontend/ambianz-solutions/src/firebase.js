import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzFlQ6NLOhhg-T4i88EG36hEfL_sQ9LpI",
  authDomain: "ambianz-solutions-pvt-ltd.firebaseapp.com",
  projectId: "ambianz-solutions-pvt-ltd",
  storageBucket: "ambianz-solutions-pvt-ltd.firebasestorage.app",
  messagingSenderId: "1056687476456",
  appId: "1:1056687476456:web:20b5ccc5ae4848cd7e035d",
  measurementId: "G-KRV8P6BKTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
