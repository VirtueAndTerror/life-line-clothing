// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgOslrj6gg6djD4c5nTbk400Fo5faxcT4',
  authDomain: 'crwn-db-48047.firebaseapp.com',
  databaseURL: 'https://crwn-db-48047.firebaseio.com',
  projectId: 'crwn-db-48047',
  storageBucket: 'crwn-db-48047.appspot.com',
  messagingSenderId: '120995028956',
  appId: '1:120995028956:web:57b404d4044a67a1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// To use in SingInAndSingUp component
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutUser = () => {
  signOut(auth);
};

export default { db };
