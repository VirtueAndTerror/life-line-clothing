import { Item } from '../../pages/shop/ShopPage';
import CartActionTypes from './cart-types';

export interface ToggleHiddenAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}
export interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: Item;
}

export interface ClearItemFromCartAction {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: Item;
}

export interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: Item;
}

export const toggleCartHidden = (): ToggleHiddenAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: Item): AddItemAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: Item): ClearItemFromCartAction => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item: Item): RemoveItemAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
