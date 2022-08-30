import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyADTxxvosDGFlsDEMv-9qAcHDCJlD0kSG4",
  authDomain: "cart-add.firebaseapp.com",
  projectId: "cart-add",
  storageBucket: "cart-add.appspot.com",
  messagingSenderId: "935762855119",
  appId: "1:935762855119:web:16eb8d3cdd7f942f9ae3ba"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
