import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Firebase */
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* Redux */
import { connect, ConnectedProps } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import type { AppDispatch, RootState } from './redux/store';

/* Pages */
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';

/* Components */
import Header from './components/header/Header';
import PrivateRoute from './components/private-route/PrivateRoute';

/* CSS */
import './App.css';

export type CurrentUser = {
  id: string;
  email: string;
  displayName: string;
  createdAt: object;
} | null;

interface AppProps extends PropsFromRedux {}

const App = ({ setCurrentUser, currentUser }: AppProps) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth, {});

        if (userDocRef) {
          onSnapshot(userDocRef, (docSnap) => {
            const user = { id: docSnap.id, ...docSnap.data() } as CurrentUser;

            console.log({ user });
            setCurrentUser(user);
            console.log({ currentUser });
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
      <Header />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='signIn' element={<PrivateRoute redirectTo='/' />}>
          <Route path='' element={<SignInAndSignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
};

/* Redux w/ Typescript */
const mapStateToProps = ({ user: { currentUser } }: RootState) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
