// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from 'firebase/app';
import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  collection,
  writeBatch,
  QuerySnapshot,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { Collection, Item } from '../interfaces';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

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
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const addCollectionAndDocs = async (
  collectionKey: string,
  objsToAdd: Item[]
) => {
  try {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objsToAdd.forEach((obj) => {
      const newDocRef = doc(collectionRef);

      batch.set(newDocRef, obj);
    });

    await batch.commit();
  } catch (err: any) {
    const error: FirebaseError = err;
    console.error('Error while adding collections', error);
  }
};

// @Todo Find out how to type this function
type Map = {
  [key: string]: Collection;
};

export const convertCollectionsSnapshotToMap = (collections: QuerySnapshot) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(`${title.toLowerCase()}`),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((acc, collection) => {
    // @ts-ignore
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export default { db };
