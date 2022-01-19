import { ToggleHiddenAction } from './cart-actions';
enum CartActionTypes {
  TOGGLE_CART_HIDDEN,
}

export default CartActionTypes;

export type CartAction = ToggleHiddenAction;
