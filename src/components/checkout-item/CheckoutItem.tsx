import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Item } from '../../pages/shop/ShopPage';

import './checkout-item.scss';

interface ChIProps {
  cartItem: Item;
}

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}: ChIProps) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
