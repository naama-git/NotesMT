// NOTE: Firebase config is intentionally exposed for testing purposes.
// In a production environment, these would be stored in environment variables.
// Security is handled via Firebase Security Rules.

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDJsj-iCvRQs8HmzI_sdvVMeav0pBG9U-A',
  authDomain: 'notesmt.firebaseapp.com',
  projectId: 'notesmt',
  storageBucket: 'notesmt.firebasestorage.app',
  messagingSenderId: '854537109541',
  appId: '1:854537109541:web:6ff17e6d4d5feb64cfffcc',
  measurementId: 'G-HX02MNFCC8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
