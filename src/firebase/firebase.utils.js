import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDkbNunqLiT1Taffg9_g8nLLaHBUPZrLk",
    authDomain: "clothing-app-4b1fb.firebaseapp.com",
    databaseURL: "https://clothing-app-4b1fb.firebaseio.com",
    projectId: "clothing-app-4b1fb",
    storageBucket: "clothing-app-4b1fb.appspot.com",
    messagingSenderId: "408420764216",
    appId: "1:408420764216:web:083b705e46f9a20f97b4cd",
    measurementId: "G-H3GBXMQB2R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;