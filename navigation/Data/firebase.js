import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBfKR81Jj3H8F0wUl9HwtFeuk3PKmEHTLk",
  authDomain: "depentracker.firebaseapp.com",
  projectId: "depentracker",
  storageBucket: "depentracker.appspot.com",
  messagingSenderId: "534868988771",
  appId: "1:534868988771:web:72aad6bf5dd417c79df956",
  measurementId: "G-007SPQ9NE8"
};

let firebase = firebase.initializeApp(firebaseConfig)

export default firebase
export const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
})