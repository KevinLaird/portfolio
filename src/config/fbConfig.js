import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyCDlfY1YLN4QjbA0yh7SH7OHTraWPmZCDM",
    authDomain: "portfolio-68c52.firebaseapp.com",
    databaseURL: "https://portfolio-68c52.firebaseio.com",
    projectId: "portfolio-68c52",
    storageBucket: "portfolio-68c52.appspot.com",
    messagingSenderId: "911599486911",
    appId: "1:911599486911:web:cc81c157764f7f5acc830a",
    measurementId: "G-6ZN863S1E3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;