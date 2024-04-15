// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2rstqIiT804U33Ippme6sg8G_lL1RXu8",
  authDomain: "real-esate-business.firebaseapp.com",
  projectId: "real-esate-business",
  storageBucket: "real-esate-business.appspot.com",
  messagingSenderId: "879870519364",
  appId: "1:879870519364:web:c043ef3a1abcaaa3d37411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;