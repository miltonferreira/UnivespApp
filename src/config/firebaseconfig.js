import firebase from "firebase";
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUn0O74D8FLMRhVYP2T1buDW-Dzjtn2Y",
  authDomain: "univespapp.firebaseapp.com",
  projectId: "univespapp",
  storageBucket: "univespapp.appspot.com",
  messagingSenderId: "413467570299",
  appId: "1:413467570299:web:dcd9ee70421621509572de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database