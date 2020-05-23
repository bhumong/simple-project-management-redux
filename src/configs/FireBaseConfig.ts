import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIB_API_KEY,
  authDomain: process.env.REACT_APP_FIB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIB_DATABASE_URL,
  projectId: process.env.REACT_APP_FIB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIB_STORAGE_BUCKETsimple,
  messagingSenderId: process.env.REACT_APP_FIB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIB_APP_ID 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({});
export default firebase;