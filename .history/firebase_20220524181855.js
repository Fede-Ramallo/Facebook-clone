import firebase from 'firebase/c/app';
import 'firebase/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKi7rBgfoVUlULc4rWXy0SmxMQSClPVbc",
  authDomain: "facebook-clone-69673.firebaseapp.com",
  projectId: "facebook-clone-69673",
  storageBucket: "facebook-clone-69673.appspot.com",
  messagingSenderId: "1084370146269",
  appId: "1:1084370146269:web:4fae3596b87b6674325c34",
  measurementId: "G-TF6TF74QM8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage};