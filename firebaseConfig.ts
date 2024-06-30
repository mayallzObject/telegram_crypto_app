// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDa-kckOeEKNFoXiYMBcOQWZaaJ_nAzNA8',
  authDomain: 'telegram-crypto-game-proj.firebaseapp.com',
  projectId: 'telegram-crypto-game-proj',
  storageBucket: 'telegram-crypto-game-proj.appspot.com',
  messagingSenderId: '325592472303',
  appId: '1:325592472303:web:1a3216974ef2226616591a',
  measurementId: 'G-JVF8DG0YZ5',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
