// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3M5r_e2zSZMsdBI-tuvc6zfcQmk8XW7Q",
    authDomain: "rural-884ed.firebaseapp.com",
    databaseURL: "https://rural-884ed-default-rtdb.firebaseio.com",
    projectId: "rural-884ed",
    storageBucket: "rural-884ed.firebasestorage.app",
    messagingSenderId: "1000463609092",
    appId: "1:1000463609092:web:5dfddfa89da90b95f2b451",
    measurementId: "G-CCWJ5ESX5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { app, db };