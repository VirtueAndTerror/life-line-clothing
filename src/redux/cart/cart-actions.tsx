import { Item } from '../../pages/shop/ShopPage';
import CartActionTypes from './cart-types';

export interface ToggleHiddenAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}
export interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: Item;
}

export const toggleCartHidden = (): ToggleHiddenAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
