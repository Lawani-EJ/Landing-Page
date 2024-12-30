  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPasssword, signInWithEmailandPasword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDEIXeJvJnxydCUnarQ5XfRV8JsKt3KoiA",
    authDomain: "serenityhotelauth.firebaseapp.com",
    projectId: "serenityhotelauth",
    storageBucket: "serenityhotelauth.firebasestorage.app",
    messagingSenderId: "200595105665",
    appId: "1:200595105665:web:63fcb526e73a572e516a80"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);