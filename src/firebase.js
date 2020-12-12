import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCf0LwwVrcTqoIrGnT1HRnFh35Kuild70k",
    authDomain: "clone-3094e.firebaseapp.com",
    projectId: "clone-3094e",
    storageBucket: "clone-3094e.appspot.com",
    messagingSenderId: "803524351363",
    appId: "1:803524351363:web:b2039c36376504fee792b6",
    measurementId: "G-BXZM87CBKD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };