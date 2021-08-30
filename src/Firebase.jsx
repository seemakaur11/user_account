
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyAqg-u9O7My0HATWDUvQSEfF-zcDMfzQIU",
    authDomain: "form-626be.firebaseapp.com",
    projectId: "form-626be",
    storageBucket: "form-626be.appspot.com",
    messagingSenderId: "893875172318",
    appId: "1:893875172318:web:b2abfb12579d83bfc8234f",
    measurementId: "G-RDPM31YZLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
      .collection("users")
      .where("uid", user.uid)
      .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
         username: user.username,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      alert(err.message);
    }
  }
  export {db,signInWithGoogle,auth }

