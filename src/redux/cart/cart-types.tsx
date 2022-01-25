import {
  ToggleHiddenAction,
  AddItemAction,
  ClearItemFromCartAction,
  RemoveItemAction,
} from './cart-actions';
enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOOGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export default CartActionTypes;

export type CartAction =
  | ToggleHiddenAction
  | AddItemAction
  | ClearItemFromCartAction
  | RemoveItemAction;
