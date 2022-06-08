import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnng95qQRIIemVC1ZQ8JYxui_-9hEZp74",
    authDomain: "assigment-task-52d18.firebaseapp.com",
    projectId: "assigment-task-52d18",
    storageBucket: "assigment-task-52d18.appspot.com",
    messagingSenderId: "933318399514",
    appId: "1:933318399514:web:ff2824fccd79923aea23a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth