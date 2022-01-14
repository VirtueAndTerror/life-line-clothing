import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import type { Unsubscribe, User } from 'firebase/auth';

/* Pages */
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';

/* Components */
import Header from './components/header/Header';

/* CSS */
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  let unsubscribe: any = null;
  useEffect(() => {
    unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log({ currentUser });
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
