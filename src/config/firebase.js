import firebase from "firebase/compat/app";
import 'firebase/compat/database';

var firebaseConfig = {
    apiKey: "AIzaSyD9YRK9pW7WK7DDZgp7Pdrh2jfQkuA8Cis",
    authDomain: "poesias-abril.firebaseapp.com",
    projectId: "poesias-abril",
    storageBucket: "poesias-abril.appspot.com",
    messagingSenderId: "199186106042",
    appId: "1:199186106042:web:d9b76dcb3bc8494861a483"
  };

const fireDB = firebase.InitalizeApp(firebaseConfig);
export default fireDB.database().ref();