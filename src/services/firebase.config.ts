// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
