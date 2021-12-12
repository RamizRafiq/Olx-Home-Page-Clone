import  firebase from 'firebase/app'
import auth from 'firebase/auth'
import database from 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCikpfNbY8llB3XBzXUyo3bKnwbKecqR4A",
  authDomain: "chatsite-d066f.firebaseapp.com",
  projectId: "chatsite-d066f",
  storageBucket: "chatsite-d066f.appspot.com",
  messagingSenderId: "224167810793",
  appId: "1:224167810793:web:26a51da9a7522323058278",
  measurementId: "G-R0V304CWYK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;


