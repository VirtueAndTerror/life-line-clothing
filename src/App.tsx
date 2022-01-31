import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import type { CurrentUser } from './interfaces';

/* Firebase */
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocs,
} from './firebase/firebase.utils';

/* Redux & Reselect */
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
// One-time use
// import { selectCollectionsForPreview } from './redux/shop/shop-selectors';

/* Pages */
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CollectionPage from './pages/collection/CollectionPage';

/* Components */
import Header from './components/header/Header';
import PrivateRoute from './components/private-route/PrivateRoute';
import CollectionsOverview from './components/collections-overview/CollectionsOverview';

/* CSS */
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth, {});

        if (userDocRef) {
          onSnapshot(userDocRef, (docSnap) => {
            const user = { id: docSnap.id, ...docSnap.data() } as CurrentUser;

            console.log({ user });
            dispatch(setCurrentUser(user));
            /* One-time use:: migrate data to Firebase */
            // addCollectionAndDocs(
            //   'collections',
            //   collectionsArray.map(({ title, items }) => ({ title, items }))
            // );
          });
        } else {
          dispatch(setCurrentUser(null));
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />}>
            <Route index element={<CollectionsOverview />} />
            <Route path=':collectionId' element={<CollectionPage />} />
          </Route>
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='signIn' element={<PrivateRoute redirectTo='/' />}>
            <Route index element={<SignInAndSignUpPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
