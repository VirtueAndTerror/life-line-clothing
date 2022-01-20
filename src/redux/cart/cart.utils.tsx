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

export const removeItemFromCart = (
  cartItems: Item[],
  cartItemToRemove: Item
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: (cartItem.quantity ? cartItem.quantity : 1) - 1,
        }
      : cartItem;
  });
};
