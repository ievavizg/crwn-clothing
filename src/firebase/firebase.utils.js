import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHGAMP4idL8mEq6dL8HtwwZkdHr_Nytsk",
    authDomain: "crwn-db-f2c51.firebaseapp.com",
    projectId: "crwn-db-f2c51",
    storageBucket: "crwn-db-f2c51.appspot.com",
    messagingSenderId: "435714754124",
    appId: "1:435714754124:web:19ce7e00b4445110e216e9"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;