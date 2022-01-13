import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';

function App() {
  return (
    <div className='w-full h-screen font-noto-sans py-8 px-10'>
      <Header />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
