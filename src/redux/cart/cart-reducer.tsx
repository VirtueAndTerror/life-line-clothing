import CartActionTypes, { CartAction } from './cart-types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
import type { Item } from '../../interfaces';
import type { Reducer } from 'redux';

export interface CartState {
  readonly hidden: boolean;
  readonly cartItems: Item[];
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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
