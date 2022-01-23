import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducers */
import userReducer, { UserState } from './user/user-reducer';
import cartReducer, { CartState } from './cart/cart-reducer';
import directoryReducer, { DirState } from './directory/directory-reducer';
import shopReducer, { ShopState } from './shop/shop-reducer';

interface StoreState {
  user: UserState;
  cart: CartState;
  directory: DirState;
  shop: ShopState;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // UserState is already being persisted by firebase
};

/* RootReducer */
const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
