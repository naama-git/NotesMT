import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIRESTORE_API_KEY,
  authDomain: 'notesmt.firebaseapp.com',
  projectId: 'notesmt',
  storageBucket: 'notesmt.firebasestorage.app',
  messagingSenderId: '854537109541',
  appId: '1:854537109541:web:6ff17e6d4d5feb64cfffcc',
  measurementId: 'G-HX02MNFCC8',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = (() => {
  if (Platform.OS === 'web') {
    return getAuth(app);
  } else {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  }
})();

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
