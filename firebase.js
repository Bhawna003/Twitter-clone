import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp40NY3gOwORSnB4KrmvVdLUFNawWed6Q",
  authDomain: "twitter-clone-eaa4f.firebaseapp.com",
  projectId: "twitter-clone-eaa4f",
  storageBucket: "twitter-clone-eaa4f.appspot.com",
  messagingSenderId: "1050147646953",
  appId: "1:1050147646953:web:09cbd140e6a82e43dcef78",
  measurementId: "G-65ZDB8DGRN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;