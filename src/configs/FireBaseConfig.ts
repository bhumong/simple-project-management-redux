import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBnZjCOj_xUj6LLYSbi6jolFshucgddi4Q",
  authDomain: "simple-pm-fd14c.firebaseapp.com",
  databaseURL: "https://simple-pm-fd14c.firebaseio.com",
  projectId: "simple-pm-fd14c",
  storageBucket: "simple-pm-fd14c.appspot.com",
  messagingSenderId: "199020267942",
  appId: "1:199020267942:web:42c03a27b0c96e84366767"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({});
export default firebase;