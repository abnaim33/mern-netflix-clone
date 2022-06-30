
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDRp1IJrBy470e1W8g1siBuLLd6lfRgB5g",
    authDomain: "mern-netflix-clone-f80be.firebaseapp.com",
    projectId: "mern-netflix-clone-f80be",
    storageBucket: "mern-netflix-clone-f80be.appspot.com",
    messagingSenderId: "1085129141806",
    appId: "1:1085129141806:web:299968cc93ffacc831b9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)