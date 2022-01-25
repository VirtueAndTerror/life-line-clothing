// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
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

// Create new user doc in Frirestore
export const createUserProfileDocument = async (
  userAuth: User,
  additionalData = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', `${userAuth.uid}`);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log({ UserDocSnap: true, userAuth });
    try {
      // Add a new doc to the users collection
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err: any) {
      console.error(
        'Error while creating a user --firebase.utils.tsx',
        err.message
      );
    }
  }

  return userDocRef;
};

// To use in SingInAndSingUp component
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutUser = () => {
  signOut(auth);
};

export default { db };
