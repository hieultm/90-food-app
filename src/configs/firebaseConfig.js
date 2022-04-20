import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA27c3OWURA64iYXgt6JoO7vcCDIH5lqt8",
    authDomain: "food-bc6d0.firebaseapp.com",
    projectId: "food-bc6d0",
    storageBucket: "food-bc6d0.appspot.com",
    messagingSenderId: "305111300456",
    appId: "1:305111300456:web:b9f7b39befd8db47147edd",
    measurementId: "G-J0PDLWBV94"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

const auth = firebase.auth()
const db = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const fbProvider = new firebase.auth.FacebookAuthProvider()

export default firebase
export { googleProvider, fbProvider, auth, db }