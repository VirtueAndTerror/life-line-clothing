import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, { quantity }) => accQuantity + (quantity ? quantity : 0),
      0
    )
);
