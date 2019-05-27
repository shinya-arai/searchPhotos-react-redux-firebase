import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "searchphotos-react.firebaseapp.com",
  databaseURL: "https://searchphotos-react.firebaseio.com",
  projectId: "searchphotos-react",
  storageBucket: "searchphotos-react.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

firebase.initializeApp(firebaseConfig);

export default firebase;