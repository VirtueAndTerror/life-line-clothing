import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Firebase */
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* Pages */
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';

/* Components */
import Header from './components/header/Header';

/* CSS */
import './App.css';

export interface CurrentUser {
  id: string;
  email: string;
  displayName: string;
  createdAt: object;
}

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth, {});

        if (userDocRef) {
          onSnapshot(userDocRef, (docSnap) => {
            const user = { id: docSnap.id, ...docSnap.data() } as CurrentUser;

            console.log(user);
            setCurrentUser(user);
          });
        } else {
          setCurrentUser(null);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='signIn' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
