import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8FIgrmGxlg1NBcQmEFAFJGG3nuLVS25Q",
  authDomain: "prepwise-5588a.firebaseapp.com",
  projectId: "prepwise-5588a",
  storageBucket: "prepwise-5588a.firebasestorage.app",
  messagingSenderId: "564640483593",
  appId: "1:564640483593:web:54d20a4ec3eaf2110b2bd8"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);