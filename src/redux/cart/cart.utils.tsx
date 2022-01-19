import { Item } from '../../pages/shop/ShopPage';

export const addItemToCart = (
  cartItems: Item[],
  cartItemToAdd: Item
): Item[] => {
  const existingCartItem = cartItems.find(
    (cartItem: Item) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: Item) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: (cartItem.quantity ? cartItem.quantity : 0) + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
