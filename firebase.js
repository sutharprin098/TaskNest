// firebase.js
// Common Firebase configuration file
// Used by: index.html, admin.html, worker.html

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔹 Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgYTocBZ_JNTtqT_M1w8cX-WkiY9sSW3w",
  authDomain: "tasknest-test.firebaseapp.com",
  projectId: "tasknest-test",
  storageBucket: "tasknest-test.appspot.com",
  messagingSenderId: "162770306478",
  appId: "1:162770306478:web:8a4150a374eaf7ec03b43f"
};

// 🔹 Initialize Firebase
export const app = initializeApp(firebaseConfig);

// 🔹 Firebase services
export const db = getFirestore(app);     // Firestore database
export const auth = getAuth(app);         // Authentication
