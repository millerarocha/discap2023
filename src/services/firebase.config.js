import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkz6xlSJvEaNJ08Spoinkb1Q5LwDYKobI",
  authDomain: "discapweb-6bfef.firebaseapp.com",
  projectId: "discapweb-6bfef",
  storageBucket: "discapweb-6bfef.appspot.com",
  messagingSenderId: "453918155865",
  appId: "1:453918155865:web:2366c745cc93a89b9afd48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);