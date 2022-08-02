import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Firebase */
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocs,
} from './firebase/firebase.utils';

/* Redux & Reselect */
import { connect, ConnectedProps } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';

/* One-time use */
// import { selectCollectionsForPreview } from './redux/shop/shop-selectors';

import { createStructuredSelector } from 'reselect';
import { AppDispatch } from './redux/store';

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

export type CurrentUser = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
} | null;

interface AppProps extends PropsFromRedux {}

const App = ({ setCurrentUser /* collectionsArray  */ }: AppProps) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth, {});

        if (userDocRef) {
          onSnapshot(userDocRef, (docSnap) => {
            const user = { id: docSnap.id, ...docSnap.data() } as CurrentUser;

            console.log({ user });
            setCurrentUser(user);
            /* One-time use:: migrate data to Firebase */
            // addCollectionAndDocs(
            //   'collections',
            //   collectionsArray.map(({ title, items }) => ({ title, items }))
            // );
          });
        } else {
          setCurrentUser(null);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

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

/* Redux w/ Typescript */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
