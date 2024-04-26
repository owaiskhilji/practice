import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getStorage,ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAAzWvVdrjlrXq-tryB5mSd1OlpM8vgA9g",
    authDomain: "practice-382ff.firebaseapp.com",
    databaseURL: "https://practice-382ff-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "practice-382ff",
    storageBucket: "practice-382ff.appspot.com",
    messagingSenderId: "773137490385",
    appId: "1:773137490385:web:d634c97b91a690f75d80f0",
    measurementId: "G-JZG6CZ2K0W"
};
    

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();

export{ ref,
uploadBytesResumable,
 getDownloadURL}