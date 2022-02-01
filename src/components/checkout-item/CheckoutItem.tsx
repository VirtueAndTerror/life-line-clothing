import { useAppDispatch } from '../../redux/hooks';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart-actions';

import type { Item } from '../../interfaces';

import './checkout-item.scss';

interface ChIProps {
  cartItem: Item;
}

const CheckoutItem = ({ cartItem }: ChIProps) => {
  const dispatch = useAppDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
