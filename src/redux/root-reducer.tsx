import { combineReducers } from 'redux';
import { CurrentUser } from '../App';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

export interface StoreState {
  user: CurrentUser;
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
