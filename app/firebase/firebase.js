import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9lzRMbA92zDR7rltMKlbeNntzVxW8wOM",
  authDomain: "blackbizworld-43418.firebaseapp.com",
  projectId: "blackbizworld-43418",
  storageBucket: "blackbizworld-43418.firebasestorage.app",
  messagingSenderId: "136451043197",
  appId: "1:136451043197:web:e4c1afdae44cf4d62b6614",
  measurementId: "G-M5SHZF6V9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
