// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2l5Y8lgq9eo8eUshpu_TrFhiI0K2yEMU",
    authDomain: "outfit-bc211.firebaseapp.com",
    projectId: "outfit-bc211",
    storageBucket: "outfit-bc211.firebasestorage.app",
    messagingSenderId: "867095717029",
    appId: "1:867095717029:web:7155f3cf0632280b02594c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)