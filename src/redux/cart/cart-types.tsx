import {
  ToggleHiddenAction,
  AddItemAction,
  ClearItemFromCartAction,
  RemoveItemAction,
} from './cart-actions';
enum CartActionTypes {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
}

export default CartActionTypes;

export type CartAction =
  | ToggleHiddenAction
  | AddItemAction
  | ClearItemFromCartAction
  | RemoveItemAction;
