import CartActionTypes from './cart-types';

export interface ToggleHiddenAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export const toggleCartHidden = (): ToggleHiddenAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
