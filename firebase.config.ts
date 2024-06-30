// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlyf6RXq1xP_xXAS0MvvSZbBSffoUe8V8',
  authDomain: 'telegram-crypto-game-proj.firebaseapp.com',
  projectId: 'telegram-crypto-game-proj',
  storageBucket: 'telegram-crypto-game-proj.appspot.com',
  messagingSenderId: '325592472303',
  appId: '1:325592472303:web:51dab111b5b5039b16591a',
  measurementId: 'G-YJY67519JH',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
