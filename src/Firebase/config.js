import { initializeApp } from "firebase/app"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDsgua7sTs9ExcXQ0HXKJbm8KyVy0SNI8",
    authDomain: "booksapp-task.firebaseapp.com",
    projectId: "booksapp-task",
    storageBucket: "booksapp-task.appspot.com",
    messagingSenderId: "197700335437",
    appId: "1:197700335437:web:d59ad2478b675a438ee904",
    measurementId: "${config.measurementId}"
  };

export default initializeApp(firebaseConfig)