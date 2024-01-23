import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
    
const firebaseConfig = {
    apiKey: "AIzaSyADuZ7KxsWU_WMBdKPUOW90joe0xeczzGI",
    authDomain: "thyroidg63-1d78d.firebaseapp.com",
    projectId: "thyroidg63-1d78d",
    storageBucket: "thyroidg63-1d78d.appspot.com",
    messagingSenderId: "195437423998",
    appId: "1:195437423998:web:32205db5caf0126942172f",
    measurementId: "G-224520FH7C"
    };
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;