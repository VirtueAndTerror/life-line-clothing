import { Routes, Route } from 'react-router-dom';

/* Pages */
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';

/* Components */
import Header from './components/header/Header';

/* CSS */
import './App.css';

function App() {
  return (
    <div className='w-full h-screen font-noto-sans py-8 px-10'>
      <Header />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='signIn' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
