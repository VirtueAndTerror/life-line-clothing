import CartActionTypes, { CartAction } from './cart-types';
import { addItemToCart } from './cart.utils';
import { Item } from '../../pages/shop/ShopPage';
import type { Reducer } from 'redux';

interface CartState {
  hidden: boolean;
  cartItems: Item[];
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer: Reducer<CartState, CartAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
