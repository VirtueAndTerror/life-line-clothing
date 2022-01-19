import CartActionTypes, { CartAction } from './cart-types';
import type { Reducer } from 'redux';

interface CartState {
  hidden: boolean;
}

const INITIAL_STATE: CartState = {
  hidden: true,
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

    default:
      return state;
  }
};

export default cartReducer;
