
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hiremind-ff0ee.firebaseapp.com",
  projectId: "hiremind-ff0ee",
  storageBucket: "hiremind-ff0ee.firebasestorage.app",
  messagingSenderId: "746896001360",
  appId: "1:746896001360:web:3d8763ecc7f5d888ad0455"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}