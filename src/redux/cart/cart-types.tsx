import { ToggleHiddenAction, AddItemAction } from './cart-actions';
enum CartActionTypes {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
}

export default CartActionTypes;

export type CartAction = ToggleHiddenAction | AddItemAction;
